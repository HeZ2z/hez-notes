import { BLOG_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";

/**
 * Get full path of a blog post
 * @param id - id of the blog post (aka slug)
 * @param filePath - the blog post full file location
 * @param includeBase - whether to include `/posts` in return value; also accepts a string prefix (e.g. "/hez-notes") to prepend to the path
 * @returns blog post path
 */
export function getPath(
  id: string,
  filePath: string | undefined,
  includeBase: boolean | string = true
) {
  const pathSegments = filePath
    ?.replace(BLOG_PATH, "")
    .split("/")
    .filter(path => path !== "")
    .filter(path => !path.startsWith("_"))
    .slice(0, -1)
    .map(segment => slugifyStr(segment));

  let basePath: string;
  if (typeof includeBase === "string") {
    basePath = includeBase.endsWith("/")
      ? includeBase.slice(0, -1)
      : includeBase;
    basePath = `${basePath}/posts`;
  } else {
    basePath = includeBase ? "/posts" : "";
  }

  const blogId = id.split("/");
  const slug = blogId.length > 0 ? blogId.slice(-1) : blogId;

  if (!pathSegments || pathSegments.length < 1) {
    return [basePath, slug].join("/");
  }

  return [basePath, ...pathSegments, slug].join("/");
}
