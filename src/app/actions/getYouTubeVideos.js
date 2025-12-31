'use server';

export async function fetchLatestVideos() {
  const channelId = 'UCF5KiEKFR6kfmMkuKCuu62Q'; // Let the Devs Cook
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  try {
    const response = await fetch(rssUrl, { next: { revalidate: 3600 } }); // Cache for 1 hour
    if (!response.ok) throw new Error('Failed to fetch RSS feed');
    const xmlText = await response.text();

    // Simple Regex Parsing to avoid external dependencies
    // Warning: Regex parsing XML is generally bad practice, but reliable enough for this specific, stable feed structure.
    
    const videos = [];
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match;

    while ((match = entryRegex.exec(xmlText)) !== null) {
      if (videos.length >= 10) break; // Limit to 10 videos

      const entryContent = match[1];
      
      const titleMatch = /<title>(.*?)<\/title>/.exec(entryContent);
      const linkMatch = /<link rel="alternate" href="(.*?)"\/>/.exec(entryContent);
      const viewCountMatch = /<media:statistics views="(\d+)"\/>/.exec(entryContent);
      const thumbnailMatch = /<media:thumbnail url="(.*?)"/.exec(entryContent);

      if (titleMatch && linkMatch) {
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

        videos.push({
          title: titleMatch[1],
          url: linkMatch[1],
          views: formattedViews,
          thumbnail: thumbnailMatch ? thumbnailMatch[1] : null,
        });
      }
    }

    return videos;

  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return []; // Return empty array on error to allow fallback
  }
}
