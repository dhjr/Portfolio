export default function sitemap() {
  const baseUrl = "https://dhananjayr.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add other routes here if you add more pages
  ];
}
