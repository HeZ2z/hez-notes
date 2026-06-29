/**
 * remark plugin: 为 Markdown 中的静态资源路径添加 base path
 *
 * 当 Astro 的 base 设置为 "/hez-notes" 时，
 * Markdown 中的 /pic/xxx.png 需要变为 /hez-notes/pic/xxx.png
 * 否则在 dev 模式下会报错，生产环境图片也会 404
 */
export default function remarkAssetBasePath(basePath) {
  return tree => {
    visit(tree, node => {
      if (
        (node.type === "image" || node.type === "link") &&
        node.url &&
        (node.url.startsWith("/pic/") ||
          node.url.startsWith("/pdf/") ||
          node.url.startsWith("/ppt/"))
      ) {
        node.url = `${basePath}${node.url}`;
      }
    });
  };
}

function visit(tree, callback) {
  callback(tree);
  if (tree.children) {
    for (const child of tree.children) {
      visit(child, callback);
    }
  }
}
