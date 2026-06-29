/**
 * remark plugin: 处理 Hexo 迁移遗留的标签语法
 */
export default function remarkFixHexoTabs() {
  return tree => {
    walk(tree);
  };
}

// 只匹配 tab / endtab 标签，避免误删其他 Hexo 标签
const HEXO_RE = /\{%\s*(?:tab\b[^%]*|endtab\s*)\s*%\}/g;

function walk(node) {
  if (!node || typeof node !== "object") return;

  // Tab HTML 注释 → h4 标题
  if (node.type === "html") {
    const tabMatch = node.value.match(/<!--\s*tabs?\s+(.+?)\s*-->/);
    if (tabMatch) {
      node.type = "heading";
      node.depth = 4;
      node.children = [{ type: "text", value: tabMatch[1] }];
      delete node.value;
      return;
    }
    // endtab 注释 → 删除
    if (/<!--\s*endtab\s*-->/.test(node.value)) {
      node.type = "__deleted__";
      return;
    }
  }

  // 文本节点：去掉 {% ... %} 残留
  if (node.type === "text" && node.value) {
    node.value = node.value.replace(HEXO_RE, "");
  }

  // 递归子节点
  if (node.children) {
    const kept = [];
    for (const child of node.children) {
      walk(child);
      if (child.type === "__deleted__") continue;
      kept.push(child);
    }
    node.children = kept;

    // 仅当段落的全部子节点都是空白文本时才删除（Hexo 标签清理后的残留）
    if (
      node.type === "paragraph" &&
      node.children.length > 0 &&
      node.children.every(
        child => child.type === "text" && child.value.trim() === ""
      )
    ) {
      node.type = "__deleted__";
    }
  }

  // 空段落标记删除
  if (
    node.type === "paragraph" &&
    (!node.children || node.children.length === 0)
  ) {
    node.type = "__deleted__";
  }
}
