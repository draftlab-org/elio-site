import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

// hardcoding list of colors so we can use it as enum
const colors = [
  "beige",
  "navy50",
  "navy100",
  "purple",
  "salmon",
  "mint",
  "sky50",
  "sky100",
  "gray50",
  "gray100",
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
