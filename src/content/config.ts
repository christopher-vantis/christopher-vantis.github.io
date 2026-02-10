import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string(),
    organization: z.string(),
    period: z.string(),
    project: z.string().optional(),
    supervisors: z.string().optional(),
    tags: z.array(z.string()),
    lang: z.enum(['de', 'en']),
    summary: z.string(),
    sortOrder: z.number(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    year: z.string(),
    tags: z.array(z.string()),
    lang: z.enum(['de', 'en']),
    summary: z.string(),
    link: z.string().optional(),
  }),
});

export const collections = { experience, projects };
