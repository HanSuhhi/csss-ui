import type { Ref } from "vue";
import { ref, computed } from "vue";
import { isUndefined } from 'lodash-es';

export const useNeedToggleTransition = (active: Ref<number>) => {
  const panelStatus = ref<"slide-right" | "slide-left">("slide-left");
  const setPanel = (index: number) => (panelStatus.value = index < active.value ? "slide-right" : "slide-left");

  const needTransition = ref(true);
  const transitionName = computed(() => (needTransition.value ? panelStatus.value : undefined));

  return { transitionName, needTransition, setPanel };
};
