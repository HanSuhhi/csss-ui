import type { Ref, Slot } from "vue";
import type { StyleSetter } from "../../tool/styleSetter.tool";
import { ref, unref, watchEffect } from "vue";
import { defer } from "lodash-es";

export function useFooter(styleSetter: StyleSetter | Ref<StyleSetter | undefined>, footer?: Slot) {
  const footerHeightSize = ref<CLayoutFooterHeightSize>("normal");
  const setFooterHeightSize = (size: CLayoutFooterHeightSize = "normal") => {
    footerHeightSize.value = size;
    return size;
  };
  watchEffect(() => {
    unref(styleSetter)?.setCssSizeProps("--footer-height", footerHeightSize.value);
  });
  // 如果没有 footer，则取消其高度
  watchEffect(() => {
    if (!footer) defer(() => unref(styleSetter)?.setRemNumber(0, "--footer-height"));
  });

  return { setFooterHeightSize };
}
