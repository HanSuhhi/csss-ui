import { useTemplateClassList } from "@/packages/composables/templateClassList";
import type { StyleSetter } from "@/tool/styleSetter.tool";
import type { Ref } from "vue";
import { unref } from "vue";
import { watchEffect } from "vue";

export function useButton(type: CButtonPropColor, styleSetter: Ref<StyleSetter | undefined>) {
  /**
   * @description set button color property
   */
  watchEffect(() => {
    if (type !== "green") unref(styleSetter)?.addClass(`csss-button-color__${type}`);
  });

  return {
    ...useTemplateClassList(["csss-button"], ["csss-button-clean"]),
  };
}
