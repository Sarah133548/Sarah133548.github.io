import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "李宇慧的博客",
  description: "李宇慧",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
