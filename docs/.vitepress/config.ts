import { defineConfig } from "vitepress";
import { defineSideBar } from "./configs/nav";

export default defineConfig({
  base: "/csss-ui/",
  title: "csss-ui",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lastUpdated: true,
  cleanUrls: "with-subfolders",
  themeConfig: {
    outline: [2, 3],
    logo: "/images/logo.png",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/HanSuhhi/csss-ui",
      },
    ],
    localeLinks: {
      text: "",
      items: [
        {
          text: "English",
          link: "/en-US/",
        },
        {
          text: "简体中文",
          link: "/zh-CN/",
        },
      ],
    },
    sidebar: defineSideBar(),
  },
  locales: {
    "en-US": {
      lang: "en-US",
      description: "A vue3.0 components library based on csss /",
    },
    "zh-CN": {
      lang: "zh-CN",
      description: "依赖于 csss 的 vue3.0 组件库 /",
    },
  },
});
