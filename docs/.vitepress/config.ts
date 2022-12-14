import { defineConfig } from "vitepress";
import { defineSideBar } from "./configs/nav";

export default defineConfig({
  title: "csss-ui",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "google-site-verification", content: "GiSgTFTRrp0djjWwu4O-vSj9CI_Fh6y9ULlMXuJ8hCo" }],
  ],
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
      description: "A vue3.0 headless components library /",
    },
    "zh-CN": {
      lang: "zh-CN",
      description: "一个 vue3.0 的无头组件库 /",
    },
  },
});
