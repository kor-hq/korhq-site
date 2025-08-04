import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      image: z.string(),
      author: z.string(),
      date: z.string(),
      tags: z.array(z.string()),
    }),
  }),
};
