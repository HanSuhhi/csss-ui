import "./input.css";

import { defineComponent, reactive } from "vue";
import { useElement } from "../composables/element";
import { useCssCustomProperty } from "../composables/cssCustomProperty";
import { useInput } from "./composables/input";
import { useInputMain } from "./composables/inputMain";
import { useInputFooter } from "./composables/inputFooter";
import { useInputHeader } from "./composables/inputHeader";
import { lintAttribute } from "../../tool/elementAttribute.tool";

export default defineComponent({
  name: "CInput",
  setup: (props, { slots, expose }) => {
    const { element, styleSetter } = useElement("csss-input");
    const { property } = useCssCustomProperty<Partial<CInputCssCustomProperties>>(styleSetter);
    const { classList: inputClassList, model, placeholder } = useInput();
    const { classList: inputMainClassList, active, inputRef } = useInputMain();
    const { classList: inputHeaderClassList } = useInputHeader();
    const { classList: inputFooterClassList } = useInputFooter();

    const exposeVal: CInputApi = reactive({
      read: {},
      state: {
        model,
        active,
        placeholder,
      },
      style: {
        classList: {
          input: inputClassList,
          inputMain: inputMainClassList,
          header: inputHeaderClassList,
          footer: inputFooterClassList,
        },
        property,
      },
    });

    expose(exposeVal);

    return () => {
      return (
        <div data-active={lintAttribute(active.value)} ref={element} class={inputClassList.value}>
          {slots.header && (
            <header data-active={lintAttribute(active.value)} class={inputHeaderClassList.value}>
              {slots.header?.({
                active,
              })}
            </header>
          )}
          <input
            ref={inputRef}
            data-active={lintAttribute(active.value)}
            onFocus={() => {
              active.value = true;
            }}
            onBlur={() => {
              active.value = false;
            }}
            placeholder={placeholder.value}
            class={inputMainClassList.value}
            type="text"
            v-model={model.value}
          />
          {slots.footer && (
            <footer data-active={lintAttribute(active.value)} class={inputFooterClassList.value}>
              {slots.footer?.({
                active,
              })}
            </footer>
          )}
        </div>
      );
    };
  },
});
