// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // 1. Modern loader import
import { z } from 'astro/zod';         // 2. Future-proof Zod import

const TopicEnum = z.enum([
  "learnings",
  "testing",
  "tech",
  "homelab",
  "crochet"
])

const blogCollection = defineCollection({
  // Load all markdown files inside src/content/blog/
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(TopicEnum).default(['learnings']),
  }),
});

export const collections = {
  'blog': blogCollection,
};
