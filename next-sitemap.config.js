/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://joslyndivine.com",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/404"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "PerplexityBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
    ],
    additionalSitemaps: ["https://joslyndivine.com/sitemap.xml"],
  },
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/donate": 1.0,
      "/programs": 0.9,
      "/stories": 0.9,
      "/get-involved": 0.9,
      "/accountability": 0.9,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
