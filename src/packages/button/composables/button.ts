import { useTemplateClassList } from "@/packages/composables/templateClassList";
import type { StyleSetter } from "@/tool/styleSetter.tool";
import { Ref, unref } from "vue";
import { watchEffect } from "vue";

export function useButton(type: CButtonPropColor, styleSetter: Ref<StyleSetter | undefined>) {
  /**
   * @description set button color property
   */
  watchEffect(() => unref(styleSetter)?.addClass(`csss-button-color__${type}`));

  return {
    ...useTemplateClassList(["csss-button"], ["csss-button-clean"]),
  };
}
