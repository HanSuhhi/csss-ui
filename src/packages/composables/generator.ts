import { computed, ref } from "vue";

export const useGenerator = <T>(defaultValue: T) => {
  const val = ref<T>(defaultValue);

  const generator = computed({
    get: () => val.value,
    set: (value) => {
      val.value = value;
    }
  });

  return { generator };
};