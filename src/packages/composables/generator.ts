import type { Ref, UnwrapRef } from "vue";
import { computed, ref } from "vue";

export const useGenerator = <T>(defaultValue?: T) => {
  let val: Ref;
  if (defaultValue) val = ref<T>(defaultValue);
  else val = ref<T>();

  const generator = computed({
    get: () => val.value,
    set: (value) => {
      val.value = value;
    }
  });

  return { generator };
};