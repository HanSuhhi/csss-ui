import type { Ref, Slot } from "vue";
import type { StyleSetter } from "../../tool/styleSetter.tool";
import { ref, unref, watchEffect } from "vue";
import { defer } from "lodash-es";

export function useAside(styleSetter: StyleSetter | Ref<StyleSetter | undefined>, aside?: Slot) {
  const asideHeightSize = ref<CLayoutAsideWidthSize>("normal");
  const setAsideWidthSize = (size: CLayoutAsideWidthSize = "normal") => {
    asideHeightSize.value = size;
    return size;
  };
  watchEffect(() => {
    unref(styleSetter)?.setCssSizeProps("--aside-width", asideHeightSize.value);
  });

  // 如果没有 aside，则取消其宽度
  watchEffect(() => {
    if (!aside) defer(() => unref(styleSetter)?.setRemNumber(0, "--aside-width"));
  });

  return { setAsideWidthSize };
}
