import "./tabs.css";

import { computed, defineComponent, readonly, watchEffect, onMounted } from 'vue';
import { useElement } from "../composables/element";
import { useTabsList } from "./composables/tabsList";
import { range } from "lodash-es";

export default defineComponent({
  name: "CTabs",
  setup: (props, { slots, expose }) => {
    const { element, styleSetter } = useElement("csss-tabs");
    const { TabsList, listNum, active, activeClick } = useTabsList();

    const panels = computed(() => range(listNum.value).map(index => `panel${index}`));



    expose({
      listNum: readonly(listNum)
    });

    return () => {
      return (
        <article ref={element} class="csss-tabs">
          {slots.list &&
            <section class="csss-tabs__list" ref={TabsList}>
              {slots.list?.({
                num: readonly(listNum)
              }).map((el, index) => (
                <div data-active={active.value === index ? "" : null} onClick={activeClick.bind(this, index)} class="csss-tabs__list__item">
                  {el}
                </div>
              ))}
            </section>
          }
          <section class="csss-tabs__panels">
            {panels.value.map((panel, index) => {
              return slots[panel] &&
                <section data-active={active.value === index ? "" : null} class={[`csss-tabs__panel`]}>
                  {slots[panel]?.()}
                </section>;
            })}
          </section>
        </article>
      );
    };
  },
});
