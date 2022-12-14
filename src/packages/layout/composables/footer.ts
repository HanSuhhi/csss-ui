import type { Ref, Slot } from "vue";
import { ref, unref, watchEffect } from "vue";
import { defer } from "lodash-es";
import type { StyleSetter } from "@/tool/styleSetter.tool";
import { useSize } from '../../composables/size';
import { useTemplateClassList } from "@/packages/composables/templateClassList";

export function useFooter(styleSetter: Ref<StyleSetter | undefined>, footer?: Slot) {
  const key = "footer-height";
  const { size: footerHeightSize } = useSize<CLayoutFooterHeightSize>(styleSetter, key);

  // 如果没有 footer，则取消其高度
  watchEffect(() => {
    if (!footer) defer(() => unref(styleSetter)?.setRemNumber(0, "--footer-height"));
  });

  return {
    footerHeightSize,
    ...useTemplateClassList(['csss-layout__footer'])
  };
}
