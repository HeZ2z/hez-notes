export const SITE = {
  website: "https://hez2z.github.io/hez-notes/",
  author: "HeZzz",
  profile: "https://github.com/HeZ2z",
  desc: "汇总课程回忆版、期末重点、小测整理与复习资料。",
  title: "HeZzz's Notes",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 0,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "在 Github 上编辑此页",
    url: "https://github.com/HeZ2z/hez-notes/edit/main/",
  },
  dynamicOgImage: false,
  dir: "auto",
  lang: "zh-CN",
  timezone: "Asia/Shanghai",
} as const;

export const BASE_PATH = new URL(SITE.website).pathname.replace(/\/$/, "");
