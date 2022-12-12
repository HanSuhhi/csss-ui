import type { StyleSetter } from "@/tool/styleSetter.tool";
import { defer } from "lodash-es";
import type { Ref, Slot } from "vue";
import { ref, unref, watchEffect } from "vue";

export function useHeader(styleSetter: StyleSetter | Ref<StyleSetter | undefined>, header?: Slot) {
  /**
   * @description 设置 header 高度
   */
  const headerHeightSize = ref<CLayoutHeaderHeightSize>("normal");
  const setHeaderHeightSize = (size: CLayoutHeaderHeightSize = "normal") => {
    headerHeightSize.value = size;
    return size;
  };
  watchEffect(() => {
    unref(styleSetter)?.setStyleSize("header-height", headerHeightSize.value);
  });

  /**
   * @description 如果没有 header，则取消其高度
   */
  watchEffect(() => {
    if (!header) defer(() => unref(styleSetter)?.setRemNumber(0, "--header-height"));
  });

  return { setHeaderHeightSize };
}
