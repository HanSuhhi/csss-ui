import type { DefaultTheme } from "vitepress";

export enum Language {
  en_US,
  zh_CN,
}
export type LanguageStruct = [en_US: string, zh_CN: string];

const definePath = (language: Language, text: string = ""): string => (<LanguageStruct>["/en-US", "/zh-CN"])[language] + text;

const defineSideBarItem = (language: Language): DefaultTheme.Sidebar => {
  const components_key = definePath(language, "/components/");
  return {
    [components_key]: [
      {
        text: (<LanguageStruct>["How to use", "使用"])[language],
        items: [
          {
            text: (<LanguageStruct>["QuickStart", "快速开始"])[language],
            link: definePath(language, "/components/quick-start"),
          },
          {
            text: (<LanguageStruct>["Description", "说明"])[language],
            link: definePath(language, "/components/desc"),
          },
        ],
      },
      {
        text: (<LanguageStruct>["common components", "通用组件"])[language],
        items: [
          {
            text: (<LanguageStruct>["Button", "按钮 Button"])[language],
            link: definePath(language, "/components/button"),
          },
        ],
      },
      {
        text: (<LanguageStruct>["Structure Components", "结构组件"])[language],
        items: [
          {
            text: (<LanguageStruct>["Layout", "布局 Layout"])[language],
            link: definePath(language, "/components/layout"),
          },
          {
            text: (<LanguageStruct>["Tabs", "选项卡 Tabs"])[language],
            link: definePath(language, "/components/tabs"),
          },
        ],
      },
    ],
  };
};

export const defineSideBar = () => ({
  ...defineSideBarItem(Language.en_US),
  ...defineSideBarItem(Language.zh_CN),
});
