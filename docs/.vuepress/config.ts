import { defineUserConfig } from "vuepress";

import { baiduAnalyticsPlugin } from '@vuepress/plugin-baidu-analytics'
import { seoPlugin } from '@vuepress/plugin-seo'



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
    plugins: [
    baiduAnalyticsPlugin({
      // 配置项
      id: '132bc60928ddfddce419ce303d3cfaa3',
    }),
    seoPlugin({
      hostname:'https://mr-whoz.github.io/',
    }),
  ],
});
