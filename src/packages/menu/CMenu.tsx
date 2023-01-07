import "./menu.css";

import { debounce, defer } from "lodash-es";
import type { StyleValue } from "vue";
import { defineComponent, reactive, ref, Transition } from "vue";
import { lintAttribute } from "../../tool/elementAttribute.tool";
import { useCssCustomProperty } from "../composables/cssCustomProperty";
import { useElement } from "../composables/element";
import { useTemplateClassList } from "../composables/templateClassList";
import { useMenu } from "./composables/menu";
type RenderMenu = Array<JSX.Element[] | JSX.Element>;

export default defineComponent({
  name: "CMenu",
  setup: (props, { slots, expose }) => {
    const { element, styleSetter } = useElement("csss-menu");
    const { property } = useCssCustomProperty<Partial<CMenuCssCustomProperties>>(styleSetter);
    const { classList: menuClassList, menuList, depths, active } = useMenu();

    const exposeVal: CMenuApi = reactive({
      read: {},
      state: {
        menuList,
      },
      style: {
        classList: {
          menu: menuClassList,
        },
        property,
      },
    });

    expose(exposeVal);

    return () => {
      return (
        <ol ref={element} class={menuClassList.value}>
          {menuList.value.map((item) => {
            const renderJsxArr = (eles: CMenuList, index: number = 1, parent: CMenuList[number]) => {
              const { classList } = useTemplateClassList(["menu-item"]);
              const _ref = ref<HTMLElement>();
              defer(
                debounce(() => {
                  if (!_ref.value?.style.getPropertyValue("--transition-height")) {
                    _ref.value?.style.setProperty("--transition-height", `${_ref.value.clientHeight}px`);
                  }
                }),
              );
              return (
                <ol ref={_ref} v-show={parent.isOpen}>
                  {eles.map((item) => {
                    const baseIndex: StyleValue = {
                      "--base-index": index,
                    };
                    return (
                      !item.hide && (
                        <li data-disabled={lintAttribute(item.disabled)}>
                          <div class={classList.value} data-active={lintAttribute(active.value === item.key)} style={baseIndex} onClick={() => (active.value = item.key)}>
                            {slots?.[`item-${index}`]?.(item).map((v) => {
                              if (!v.props) {
                                v.props = {};
                              }
                              v.props!["data-disabled"] = lintAttribute(item.disabled);
                              // v.props!["data-active"] = lintAttribute(active.value === item.key);
                              return v;
                            })}
                          </div>
                          {!item.disabled && (
                            <Transition name="slide-up" mode="out-in">
                              {renderJsxArr(item.children || [], index + 1, item)}
                            </Transition>
                          )}
                        </li>
                      )
                    );
                  })}
                </ol>
              );
            };
            const { classList } = useTemplateClassList(["menu-item"]);
            return (
              !item.hide && (
                <li data-disabled={lintAttribute(item.disabled)}>
                  <div class={classList.value} data-active={lintAttribute(active.value === item.key)} onClick={() => (active.value = item.key)}>
                    {slots?.["item-0"]?.(item).map((t) => {
                      t.props!["data-disabled"] = lintAttribute(item.disabled);
                      // t.props!["data-active"] = lintAttribute(active.value === item.key);
                      // console.log("t: ", t);
                      return t;
                    })}
                  </div>
                  {!item.disabled && (
                    <Transition name="slide-up" mode="out-in">
                      {renderJsxArr(item.children || [], 1, item)}
                    </Transition>
                  )}
                </li>
              )
            );
          })}
        </ol>
      );
    };
  },
});
