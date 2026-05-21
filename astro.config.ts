import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import rehypeKatex from "rehype-katex";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkMath from "remark-math";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import { SITE } from "./src/config";

export default defineConfig({
  site: SITE.website,
  base: "/hez-notes",
  integrations: [
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkToc,
      [remarkCollapse, { test: "Table of contents" }],
    ],
    rehypePlugins: [[rehypeKatex, { strict: false }]],
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      langAlias: {
        Java: "java",
        Javascript: "javascript",
        Python: "python",
        C: "c",
        Text: "text",
        input: "text",
        output: "text",
        redis: "text",
      },
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  vite: {
    // eslint-disable-next-line
    // @ts-ignore
    // This will be fixed in Astro 6 with Vite 7 support
    // See: https://github.com/withastro/astro/issues/14030
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
});
