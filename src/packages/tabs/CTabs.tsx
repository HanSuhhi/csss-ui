import "./tabs.css";

import { lintAttribute } from "@/tool/elementAttribute.tool";
import type { VNodeNormalizedChildren } from 'vue';
import { defineComponent, reactive, readonly, Transition } from 'vue';
import { useElement } from "../composables/element";
import { useTabs } from "./composables/tabs";
import { useTabsList } from "./composables/tabsList";
import { useTabsPanel } from './composables/tabsPanel';
import { useNeedToggleTransition } from "./composables/transition";

export default defineComponent({
  name: "CTabs",
  setup: (props, { slots, expose }) => {
    const { element, getVnodeIndex, styleSetter } = useElement("csss-tabs");
    const { classList: tabsClassList } = useTabs(styleSetter);
    const {
      classList: listClassList,
      listItemClassList,
      TabsList,
      total,
      active,
      isActive,
      setActive,
    } = useTabsList();
    const {
      classList: panelClassList,
      panelItemClassList,
      panels,
    } = useTabsPanel(total, active);

    const { transitionName, needTransition, setPanel } = useNeedToggleTransition(active);

    const exposeVals: CTabsApi = reactive({
      read: {
        total: readonly(total),
        panels: readonly(panels),
      },
      state: {
        active,
      },
      style: {
        needTransition,
        classList: {
          tabs: tabsClassList,
          list: listClassList,
          listItem: listItemClassList,
          panel: panelClassList,
          panelItem: panelItemClassList,
        }
      }
    });

    expose(exposeVals);

    return () => {
      return (
        <article ref={element} class={tabsClassList.value}>
          {slots.default?.()}
          {
            <section class={listClassList.value} ref={TabsList}>
              {slots.list &&
                slots.list?.({
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
                          onClick={() => {
                            const _index = indexBase + i;
                            setPanel.call(this, _index);
                            setActive.call(this, _index);
                          }}
                          data-active={lintAttribute(isActive(indexBase + i))}
                          class={listItemClassList.value}>
                          {e}
                        </div>
                      );
                    });
                  })}
            </section>
          }
          <section class={panelClassList.value}>
            {panels.value.map((panel, index) => {
              return slots[panel] && active.value === index &&
                <Transition name={transitionName.value} mode="out-in">
                  <section key={index} class={panelItemClassList.value}>
                    {slots[panel]?.({
                      active: readonly(active)
                    })}
                  </section>
                </Transition>;
            })}
          </section>
        </article >
      );
    };
  },
});
