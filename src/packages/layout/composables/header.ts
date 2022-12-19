import type { StyleSetter } from "@/tool/styleSetter.tool";
import { defer } from "lodash-es";
import type { Ref, Slot } from "vue";
import { unref, watchEffect } from 'vue';
import { useSize } from '@/packages/composables/size';

export function useHeader(styleSetter: StyleSetter | Ref<StyleSetter | undefined>, header?: Slot) {
  const { size: headerHeightSize } = useSize<CLayoutHeaderHeightSize>();

  watchEffect(() => {
    // 如果没有 header，则取消其高度
    if (!header) defer(() => unref(styleSetter)?.setRemNumber(0, "--header-height"));
    unref(styleSetter)?.setStyleSize("header-height", headerHeightSize.value);
  });

  return { headerHeightSize };
}
