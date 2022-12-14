import "./tabs.css";

import { lintAttribute } from "@/tool/elementAttribute.tool";
import type { VNodeNormalizedChildren } from 'vue';
import { defineComponent, readonly } from 'vue';
import { useElement } from "../composables/element";
import { useTabsList } from "./composables/tabsList";
import { useTabsPanel } from './composables/tabsPanel';
import { useTabs } from "./composables/tabs";

export default defineComponent({
  name: "CTabs",
  setup: (props, { slots, expose }) => {
    const { element, getVnodeIndex, styleSetter } = useElement("csss-tabs");
    const { classes: tabsClasses, setExtraClasses: setTabsClasses } = useTabs(styleSetter);
    const { TabsList, total, active, classes: listClasses, isActive, setActive, needDefaultListStyle } = useTabsList();
    const { panels, classes: panelClasses, needDefaultPanelStyle } = useTabsPanel(total);

    expose({
      total: readonly(total),
      active: readonly(active),
      panels: readonly(panels),
      needDefaultListStyle,
      needDefaultPanelStyle,
      setActive,
      setTabsClasses
    });

    return () => {
      return (
        <article ref={element} class={tabsClasses.value}>
          {slots.default?.()}
          {
            slots.list &&
            <section class="csss-tabs__list" ref={TabsList}>
              {slots.list?.({
                listTotal: readonly(total),
                active: readonly(active)
              })
                // filter comment vnode
                .filter((el) => el.type.toString() !== 'Symbol(Comment)')
                .map(el => el.type.toString() === 'Symbol(Fragment)' ? el.children : [el])
                .map((el, index, arr) => {
                  const indexBase = getVnodeIndex(index, arr as VNodeNormalizedChildren[][]);
                  return (el as VNodeNormalizedChildren[]).map((e, i) => {
                    return (
                      <div
                        onClick={setActive.bind(this, indexBase + i, e)}
                        data-active={lintAttribute(isActive(indexBase + i))}
                        class={listClasses.value}>
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
                <section data-active={lintAttribute(active.value === index)} class={panelClasses.value}>
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
