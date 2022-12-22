import type { VNodeNormalizedChildren } from "vue";

/**
 * @description get index of vnode
 */
export function getVnodeIndex(index: number, arr: Array<VNodeNormalizedChildren[]>) {
  let _index = 0;
  for (let i = 0; i < index; i++) {
    const nodes = arr[i];
    _index += nodes.length;
  }
  return _index;
}
