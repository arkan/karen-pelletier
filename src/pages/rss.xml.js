import rss from '@astrojs/rss';
import siteData from "../data/siteData.json";

export const GET = () => rss({
  title: siteData.title,
  description: siteData.description,
  site: import.meta.env.SITE,
  items: []
});