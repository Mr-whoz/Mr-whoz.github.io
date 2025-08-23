import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "互联网广告",
      icon: "book",
      prefix: "互联网广告/",
      children: [
        {
          collapsible: true, // 可折叠
          text: "需求方平台DSP",
          icon: "lightbulb",
          prefix: "需求方平台DSP/",
          children: [
            "简介.md",
            "媒体请求->召回.md",
            "队列控制.md",
            "节省带宽.md",
          ],
        },
      ],
    },
  ],
});
