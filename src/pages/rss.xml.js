import rss from '@astrojs/rss';
import siteData from "../data/siteData.json";

import { formatBlogPosts } from "../js/utils"

const postImportResult = import.meta.glob('./posts/**/*.md', { eager: true });
const posts = formatBlogPosts(Object.values(postImportResult));

export const GET = () => rss({
  title: siteData.title,
  description: siteData.description,
  site: import.meta.env.SITE,
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.date,
    description: post.frontmatter.description,
    customData: `
      <author>${siteData.author}</author>
    `
  }))
});