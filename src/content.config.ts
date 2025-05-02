import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const colors = [
  "beige",
  "navy-50",
  "navy-100",
  "purple",
  "salmon",
  "mint",
  "sky-50",
  "sky-100",
  "gray-50",
  "gray-100",
] as const;

const portfolio = defineCollection({
  loader: file("src/data/portfolio.yaml"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      description: z.string(),
      role: z.string(),
      period: z.string(),
      container_size: z.enum(["short", "tall", "grande", "venti"]),
      image: z.object({
        src: image(),
        align: z.enum(["center", "bottom"]),
        colorized: z.boolean(),
      }),
      background: z.object({
        primary_color: z.enum(colors),
        secondary_color: z.enum(colors).optional(),
      }),
    }),
});

const hero = defineCollection({
  loader: file("src/data/hero.yaml"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      content: z.string(),
      image: image(),
    }),
});

export const collections = { portfolio, hero };
