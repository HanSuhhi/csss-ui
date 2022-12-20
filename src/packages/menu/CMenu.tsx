import "./menu.css";

import { defineComponent, reactive } from 'vue';
import { useElement } from "../composables/element";
import { useCssCustomProperty } from '../composables/cssCustomProperty';

export default defineComponent({
  name: "CMenu",
  setup: (props, { slots, expose }) => {
    const { element, styleSetter } = useElement("csss-menu");
    const { property } = useCssCustomProperty<Partial<CMenuCssCustomProperties>>(styleSetter);

    const exposeVal: CMenuApi = reactive({
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
        <article ref={element} class="csss-menu">
        </article>
      );
    };
  },
});
