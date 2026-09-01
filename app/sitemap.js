export default function sitemap() {
  return [
    {
      // Single-page portfolio — only the root URL is a real indexable page.
      // Hash fragment URLs (/#projects, /#experience, etc.) are not separate
      // indexable pages and should not be listed in sitemaps.
      url: 'https://elsoghayar.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }
  ];
}