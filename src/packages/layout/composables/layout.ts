import { useTemplateClassList } from "@/packages/composables/templateClassList";
import type { StyleSetter } from "@/tool/styleSetter.tool";
import type { Ref } from "vue";
import { unref, watchEffect } from 'vue';
import { useGenerator } from '@/packages/composables/generator';

export function useLayout(styleSetter: Ref<StyleSetter | undefined>) {
  /**
   * @description layout type
   */
  const { generator: layoutType } = useGenerator<CLayoutType>("header-footer");

  watchEffect(() => {
    unref(styleSetter)?.addClass(`csss-layout-${layoutType.value}`);
  });

  return {
    layoutType,
    ...useTemplateClassList(["csss-layout"])
  };
}
