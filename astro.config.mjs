import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';

// Drafts get a preview page but stay out of the sitemap.
const draftSlugs = fs.readdirSync('./src/content/blog')
  .filter((f) => f.endsWith('.md') && /\nstatus:\s*["']?draft/.test(fs.readFileSync(`./src/content/blog/${f}`, 'utf8')))
  .map((f) => f.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''));

export default defineConfig({
  site: 'https://panavb.com',
  integrations: [sitemap({ filter: (page) => !draftSlugs.some((slug) => page.includes(`/blog/${slug}/`)) })],
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed', wrap: true },
  },
});
