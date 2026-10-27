import rss from '@astrojs/rss';
import { publishedPosts, slugOf } from '../lib/content';

export async function GET(context) {
  const posts = await publishedPosts();
  return rss({
    title: 'Panav B · Blog',
    description: 'AI-first Power BI development and report design, with the files to try it yourself.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${slugOf(p.id)}/`,
    })),
  });
}
