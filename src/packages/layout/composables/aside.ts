import type { StyleSetter } from "@/tool/styleSetter.tool";
import { defer } from "lodash-es";
import type { Ref, Slot } from "vue";
import { ref, unref, watchEffect } from "vue";

export function useAside(styleSetter: StyleSetter | Ref<StyleSetter | undefined>, aside?: Slot) {
  const asideHeightSize = ref<CLayoutAsideWidthSize>("normal");
  const setAsideWidthSize = (size: CLayoutAsideWidthSize = "normal") => {
    asideHeightSize.value = size;
    return size;
  };
  watchEffect(() => {
    unref(styleSetter)?.setStyleSize("aside-width", asideHeightSize.value);
  });

  // 如果没有 aside，则取消其宽度
  watchEffect(() => {
    if (!aside) defer(() => unref(styleSetter)?.setRemNumber(0, "--aside-width"));
  });

  return { setAsideWidthSize };
}
