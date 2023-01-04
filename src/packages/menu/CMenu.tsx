import "./menu.css";

import type { StyleValue } from "vue";
import { nextTick } from "vue";
import { Transition } from "vue";
import { defineComponent, reactive, ref, render, watchEffect } from "vue";
import { useElement } from "../composables/element";
import { useCssCustomProperty } from "../composables/cssCustomProperty";
import { useMenu } from "./composables/menu";
import { forEach, defer, debounce } from "lodash-es";
import { useTemplateClassList } from "../composables/templateClassList";
import { nanoid } from "nanoid";
import { lintAttribute } from "../../tool/elementAttribute.tool";
type RenderMenu = Array<JSX.Element[] | JSX.Element>;

export default defineComponent({
  name: "CMenu",
  setup: (props, { slots, expose }) => {
    const { element, styleSetter } = useElement("csss-menu");
    const { property } = useCssCustomProperty<Partial<CMenuCssCustomProperties>>(styleSetter);
    const { classList: menuClassList, menuList, depths } = useMenu();

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
                          <div class={classList.value} style={baseIndex}>
                            {slots?.[`item-${index}`]?.(item).map((v) => {
                              if (!v.props) {
                                v.props = {};
                              }
                              v.props!["data-disabled"] = lintAttribute(item.disabled);
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
                  <div class={classList.value}>
                    {slots?.["item-0"]?.(item).map((t) => {
                      t.props!["data-disabled"] = lintAttribute(item.disabled);
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
