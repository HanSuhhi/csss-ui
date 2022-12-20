import type { StyleSetter } from "@/tool/styleSetter.tool";
import { defer } from "lodash-es";
import type { Ref, Slot } from "vue";
import { unref, watchEffect } from "vue";
import { useSize } from '../../composables/size';
import { useTemplateClassList } from '../../composables/templateClassList';

export function useAside(styleSetter: StyleSetter | Ref<StyleSetter | undefined>, aside?: Slot) {
  const { size: asideWidthSize } = useSize<CLayoutAsideWidthSize>();

  watchEffect(() => {
    // 如果没有 aside，则取消其宽度
    if (!aside) defer(() => unref(styleSetter)?.setRemNumber(0, "--aside-width"));
    unref(styleSetter)?.setStyleSize("aside-width", asideWidthSize.value);
  });

  return {
    asideWidthSize,
    ...useTemplateClassList(['csss-layout__aside'])
  };
}
