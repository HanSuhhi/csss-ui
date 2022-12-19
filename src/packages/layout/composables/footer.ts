import type { Ref, Slot } from "vue";
import { ref, unref, watchEffect } from "vue";
import { defer } from "lodash-es";
import type { StyleSetter } from "@/tool/styleSetter.tool";
import { useSize } from '../../composables/size';

export function useFooter(styleSetter: StyleSetter | Ref<StyleSetter | undefined>, footer?: Slot) {
  const { size: footerHeightSize } = useSize<CLayoutFooterHeightSize>();

  watchEffect(() => {
    unref(styleSetter)?.setStyleSize("footer-height", footerHeightSize.value);
  });
  // 如果没有 footer，则取消其高度
  watchEffect(() => {
    if (!footer) defer(() => unref(styleSetter)?.setRemNumber(0, "--footer-height"));
  });

  return { footerHeightSize };
}
