import "./tabs.css";

import { lintAttribute } from "@/tool/elementAttribute.tool";
import type { VNodeNormalizedChildren } from 'vue';
import { defineComponent, readonly } from 'vue';
import { useElement } from "../composables/element";
import { useTabsList } from "./composables/tabsList";
import { useTabsPanel } from './composables/tabsPanel';

export default defineComponent({
  name: "CTabs",
  setup: (props, { slots, expose }) => {
    const { element, getVnodeIndex } = useElement("csss-tabs");
    const { TabsList, total, active, classes: listClasses, isActive, changeActive, needDefaultListStyle } = useTabsList(slots.list);
    const { panels, classes: panelClasses } = useTabsPanel(total);

    expose({
      total: readonly(total),
      active: active,
      panels: readonly(panels),
      needDefaultListStyle
    });

    return () => {
      return (
        <article ref={element} class="csss-tabs">
          {
            slots.list &&
            <section class="csss-tabs__list" ref={TabsList}>
              {slots.list?.({
                listTotal: readonly(total),
                active: readonly(active)
              })
                // filter comment vnode
                .filter((el) => el.type.toString() !== 'Symbol(Comment)')
                .map(el => {
                  if (el.type.toString() === 'Symbol(Fragment)') {
                    return el.children;
                  }
                  return [el];
                })
                .map((el, index, arr) => {
                  const indexBase = getVnodeIndex(index, arr as VNodeNormalizedChildren[][]);
                  return (el as VNodeNormalizedChildren[]).map((e, i) => {
                    return (
                      <div
                        onClick={changeActive.bind(this, indexBase + i)}
                        data-active={lintAttribute(isActive(indexBase + i))}
                        class={listClasses}>
                        {e}
                      </div>
                    );
                  });
                })}
            </section>
          }
          <section class="csss-tabs__panels">
            {panels.value.map((panel, index) => {
              return slots[panel] &&
                <section data-active={lintAttribute(active.value === index)} class={panelClasses()}>
                  {slots[panel]?.({
                    active: readonly(active)
                  })}
                </section>;
            })}
          </section>
        </article>
      );
    };
  },
});
