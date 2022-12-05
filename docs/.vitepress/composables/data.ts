import { map } from "lodash-es";
import { filter } from "lodash-es";
import { useData } from "vitepress";

export const useVitepress = () => {
  const vitepressData = useData();
  const relativePath = vitepressData.page.value.relativePath;
  const env = map(
    {
      zh_CN: relativePath.includes("zh-CN"),
    },
    (value, key) => key,
  )[0];
  return { ...vitepressData, env };
};
