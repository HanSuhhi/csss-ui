import "./button.css";

import type { PropType } from "vue";
import { defineComponent, reactive } from "vue";
import { useElement } from "../composables/element";
import { useCssCustomProperty } from "../composables/cssCustomProperty";
import { useButton } from "./composables/button";

export default defineComponent({
  name: "CButton",
  props: {
    color: {
      type: String as PropType<CButtonPropColor>,
      default: "green",
      validator(value: string) {
        return ["green", "blue", "yellow", "red"].includes(value);
      },
    },
  },
  setup: (props, { slots, expose }) => {
    const { element, styleSetter } = useElement("csss-button");
    const { property } = useCssCustomProperty<Partial<CButtonCssCustomProperties>>(styleSetter);
    const { classList: buttonClassList } = useButton(props.color, styleSetter);

    const exposeVal: CButtonApi = reactive({
      read: {},
      state: {},
      style: {
        classList: {
          button: buttonClassList,
        },
        property,
      },
    });

    expose(exposeVal);

    return () => {
      return (
        <button ref={element} class={buttonClassList.value}>
          {slots.default?.()}
        </button>
      );
    };
  },
});
