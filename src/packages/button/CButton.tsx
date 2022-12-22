import "./button.css";

import { defineComponent, reactive } from 'vue';
import { useElement } from "../composables/element";
import { useCssCustomProperty } from '../composables/cssCustomProperty';
import { useButton } from './composables/button';

export default defineComponent({
  name: "CButton",
  setup: (props, { slots, expose }) => {
    const { element, styleSetter } = useElement("csss-button");
    const { property } = useCssCustomProperty<Partial<CButtonCssCustomProperties>>(styleSetter);
    const { classList: buttonClassList } = useButton();

    const exposeVal: CButtonApi = reactive({
      read: {},
      state: {},
      style: {
        classList: {

        },
        property
      }
    });

    expose(exposeVal);

    return () => {
      return (
        <button data-clean ref={element} class={buttonClassList.value}>
          {slots.default?.()}
        </button>
      );
    };
  },
});
