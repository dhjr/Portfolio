'use server';

async function isShorts(videoId) {
  try {
    const response = await fetch(`https://www.youtube.com/shorts/${videoId}`, {
      method: "HEAD",
      redirect: "manual", // Prevent automatic following of redirects
      next: { revalidate: 3600 * 24 } // Cache the check for 24 hours
    });
    // If it returns 200, it's a valid Shorts URL (so it IS a Short)
    // If it returns 303 (See Other), it redirects to /watch (so it's a regular Video)
    return response.status === 200;
  } catch (error) {
    console.warn(`Error checking if video ${videoId} is Short:`, error);
    return false; // Assume not a short on error to keep it safe
  }
}

export async function fetchLatestVideos() {
  const channelId = 'UCF5KiEKFR6kfmMkuKCuu62Q'; // Let the Devs Cook
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  try {
    const response = await fetch(rssUrl, { next: { revalidate: 3600 } }); // Cache RSS for 1 hour
    if (!response.ok) throw new Error('Failed to fetch RSS feed');
    const xmlText = await response.text();

    const candidates = [];
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match;

    while ((match = entryRegex.exec(xmlText)) !== null) {
      // Fetch a bit more than 10 initially because we might filter some out
      if (candidates.length >= 15) break; 

      const entryContent = match[1];
      
      const titleMatch = /<title>(.*?)<\/title>/.exec(entryContent);
      const linkMatch = /<link rel="alternate" href="(.*?)"\/>/.exec(entryContent);
      const videoIdMatch = /<yt:videoId>(.*?)<\/yt:videoId>/.exec(entryContent);
      const viewCountMatch = /<media:statistics views="(\d+)"\/>/.exec(entryContent);
      const thumbnailMatch = /<media:thumbnail url="(.*?)"/.exec(entryContent);

      if (titleMatch && linkMatch && videoIdMatch) {
         // Format view count (e.g., 1200 -> 1.2k)
         let formattedViews = "0";
         if (viewCountMatch) {
             const views = parseInt(viewCountMatch[1]);
             if (views >= 1000) {
                 formattedViews = (views / 1000).toFixed(1) + "k";
             } else {
                 formattedViews = views.toString();
             }
         }

        candidates.push({
          title: titleMatch[1],
          url: linkMatch[1],
          id: videoIdMatch[1],
          views: formattedViews,
          thumbnail: thumbnailMatch ? thumbnailMatch[1] : null,
        });
      }
    }

    // Filter out shorts in parallel
    const checks = await Promise.all(
      candidates.map(async (video) => {
        const isShort = await isShorts(video.id);
        return { ...video, isShort };
      })
    );

    const longFormVideos = checks
      .filter(v => !v.isShort)
      .slice(0, 8); // Keep top 8 valid videos

    return longFormVideos;

  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return []; // Return empty array on error to allow fallback
  }
}
