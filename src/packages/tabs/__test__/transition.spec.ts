import { describe, expect, it } from 'vitest';
import { ref } from 'vue';
import { useNeedToggleTransition } from '../composables/transition';

describe("transition.ts", () => {
  it("change transition name", () => {
    const active = ref(0);
    const { transitionName, needTransition, setPanel } = useNeedToggleTransition(active);
    expect(transitionName.value).toBe("slide-left");
    needTransition.value = false;
    expect(transitionName.value).toBeUndefined();
  });
});
