import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const optionalUrl = z.preprocess((v) => (v === '' || v === null ? undefined : v), z.string().optional());

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    status: z.enum(['published', 'draft', 'planned']).default('draft'),
    cover: optionalUrl,
    tags: z.array(z.string()).default([]),
    download: optionalUrl,
    linkedin: optionalUrl,
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    year: z.coerce.number(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    format: z.string().default('PBIX'),
    cover: optionalUrl,
    preview: z.enum(['pies', 'turnover', 'survival', 'loyalty', 'none']).default('none'),
    download: optionalUrl,
    order: z.coerce.number().default(99),
    hidden: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    start: z.string(),
    end: z.string().default('Now'),
    logo: optionalUrl,
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    order: z.coerce.number().default(99),
    hidden: z.boolean().default(false),
  }),
});

export const collections = { blog, work, experience };
