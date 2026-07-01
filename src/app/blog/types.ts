import { z } from 'zod';

export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  slug: z.string(),
  publishedAt: z.string(),
  tags: z.array(z.string()),
  body: z.array(z.string()),
  location: z.string().optional(),
  heroImage: z.string().optional(),
  author: z.object({
    name: z.string(),
    handle: z.string(),
    avatar: z.string().url().optional()
  })
});

export type BlogPost = z.infer<typeof blogPostSchema>;
