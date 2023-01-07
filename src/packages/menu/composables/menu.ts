import { useGenerator } from "@/packages/composables/generator";
import { useTemplateClassList } from "@/packages/composables/templateClassList";
import { forEach } from "lodash-es";
import type { UnwrapRef } from "vue";
import { computed } from "vue";
import { ref, watchEffect } from "vue";

function loop(val: UnwrapRef<CMenuList>, disabled?: boolean): void {
  let _index = 0;
  forEach(val, (v) => {
    const isOpen = ref(true);
    if (disabled) v.disabled = true;
    const toggle = () => {
      if (!v.disabled) isOpen.value = !isOpen.value;
    };
    v["key"] = _index++;
    v["isOpen"] = isOpen as any;
    v["toggle"] = toggle;
    if (v?.children?.length) {
      loop(v.children, v.disabled);
    }
  });
}

/**
 * @description calc array depth
 */
const getDepth = (arr: CMenuList): number => {
  if (!arr.length) return 0;
  let _depth = 1;
  forEach(arr, (v) => {
    if (v.children) _depth += getDepth(v.children);
  });
  return _depth;
};

export function useMenu() {
  const { generator: menuList } = useGenerator<CMenuList>([], loop);

  /**
   * @description list depth
   */
  const _classLists = ref<Record<string, string[]>>({});
  const classLists = computed({
    get: () => _classLists.value,
    set: (val) => {
      for (const key in val) {
        _classLists.value[key] = val[key];
      }
    },
  });
  watchEffect(() => {
    for (let i = 0; i < getDepth(menuList.value); i++) {
      const { classList } = useTemplateClassList([`menu-item-${i}`, "menu-item"]);
      classLists.value = { [i]: classList } as any;
    }
  });

  /**
   * @description active
   */
  const active = ref(-1);

  return {
    ...useTemplateClassList(["csss-menu"]),
    menuList,
    classLists,
    active,
  };
}
