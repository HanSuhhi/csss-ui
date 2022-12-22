import { useGenerator } from "@/packages/composables/generator";
import type { StyleSetter } from "@/tool/styleSetter.tool";
import { forEach } from "lodash-es";
import type { Ref } from "vue";
import { unref, watchEffect } from "vue";

export const useCssCustomProperty = <T extends Record<string, string>>(styleSetter: Ref<StyleSetter | undefined>) => {
  const { generator } = useGenerator<T>({} as T);

  watchEffect(() => {
    forEach(generator.value!, (value, key) => {
      if (value) unref(styleSetter)?.setString(value, key);
    });
  });

  return { property: generator };
};
