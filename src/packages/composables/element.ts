import { StyleSetter } from "@/tool/styleSetter.tool";
import type { VNode, VNodeNormalizedChildren } from "vue";
import { onMounted, ref } from "vue";

export function useElement(componentName: string) {
  const element = ref<HTMLElement>();
  const styleSetter = ref<StyleSetter>();

  /**
   * @description get index of vnode
   */
  function getVnodeIndex(index: number, arr: Array<VNodeNormalizedChildren[]>) {
    let _index = 0;
    for (let i = 0; i < index; i++) {
      const nodes = arr[i];
      _index += nodes.length;
    }
    return _index;
  }

  onMounted(() => (styleSetter.value = new StyleSetter(element.value!, componentName)));

  return {
    element,
    styleSetter,
    getVnodeIndex,
  };
}
