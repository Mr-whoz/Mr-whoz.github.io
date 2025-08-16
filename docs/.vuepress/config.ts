import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mr.whoz的文档和博客",
      description: "记录工作内容",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
