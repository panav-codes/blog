import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type WorkItem = CollectionEntry<'work'>;

/** Turn a file id like "2026-12-01-my-post" into "my-post". */
export const slugOf = (id: string) => id.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\/index$/, '');

const byDateDesc = (a: Post, b: Post) => b.data.date.valueOf() - a.data.date.valueOf();
const byDateAsc = (a: Post, b: Post) => a.data.date.valueOf() - b.data.date.valueOf();

/** Published posts, newest first. */
export async function publishedPosts() {
  return (await getCollection('blog', (p) => p.data.status === 'published')).sort(byDateDesc);
}

/** Planned posts, soonest first. Shown as "Soon" with no link. */
export async function plannedPosts() {
  return (await getCollection('blog', (p) => p.data.status === 'planned')).sort(byDateAsc);
}

/** Posts that get their own page: published ones, plus drafts (unlisted, for previewing). */
export async function pagePosts() {
  return getCollection('blog', (p) => p.data.status !== 'planned');
}

export async function workItems() {
  return (await getCollection('work', (w) => !w.data.hidden)).sort((a, b) => a.data.order - b.data.order);
}

export async function experienceItems() {
  return (await getCollection('experience', (e) => !e.data.hidden)).sort((a, b) => a.data.order - b.data.order);
}

export const fmtMonth = (d: Date) => d.toLocaleDateString('en-CA', { month: 'short', year: 'numeric', timeZone: 'UTC' });
export const fmtDate = (d: Date) => d.toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
