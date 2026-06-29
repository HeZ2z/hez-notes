import type { APIRoute } from "astro";
import { generateOgImageForSite } from "@/utils/generateOgImages";
import fs from "node:fs";
import path from "node:path";

export const GET: APIRoute = async () => {
  try {
    const buffer = await generateOgImageForSite();
    return new Response(new Uint8Array(buffer), {
      headers: { "Content-Type": "image/png" },
    });
  } catch {
    // 如果 Google Fonts 无法访问导致生成失败，回退到静态 OG 图片
    const fallback = fs.readFileSync(
      path.join(process.cwd(), "public", "astropaper-og.png")
    );
    return new Response(fallback, {
      headers: { "Content-Type": "image/png" },
    });
  }
};
