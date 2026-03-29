import VideoCard from "@/components/customComponents/VideoCard";
import { fetchLatestVideos } from "@/actions/getYouTubeVideos";

const initialVideoData = [
  {
    title: "Building a Portfolio with Next.js",
    views: "1.2k",
    color: "bg-blue-500",
    url: "https://youtube.com/@LetTheDevsCook",
  },
  {
    title: "Mastering Tailwind CSS Grid",
    views: "850",
    color: "bg-teal-500",
    url: "https://youtube.com/@LetTheDevsCook",
  },
  {
    title: "React Hooks Explained",
    views: "2.5k",
    color: "bg-indigo-500",
    url: "https://youtube.com/@LetTheDevsCook",
  },
  {
    title: "Framer Motion Animations",
    views: "1.8k",
    color: "bg-purple-500",
    url: "https://youtube.com/@LetTheDevsCook",
  },
  {
    title: "Full Stack Roadmap 2024",
    views: "3.2k",
    color: "bg-rose-500",
    url: "https://youtube.com/@LetTheDevsCook",
  },
];

export default async function Videos() {
  const fetchedVideos = await fetchLatestVideos();
  
  let videos = initialVideoData;
  if (fetchedVideos && fetchedVideos.length > 0) {
    const colors = [
      "bg-blue-500",
      "bg-teal-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-rose-500",
      "bg-green-500",
    ];

    videos = fetchedVideos.map((v, i) => ({
      ...v,
      color: colors[i % colors.length],
    }));
  }

  return (
    <section className="w-full pt-2 pb-12 px-4 relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="w-full overflow-hidden">
          <div
            className="relative flex w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            }}
          >
            <div className="flex gap-6 animate-marquee w-max py-4">
              {[...videos, ...videos].map((video, i) => (
                <VideoCard key={i} video={video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
