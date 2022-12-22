import "./menu.css";

import { defineComponent, reactive } from 'vue';
import { useElement } from "../composables/element";
import { useCssCustomProperty } from '../composables/cssCustomProperty';
import { useMenu } from './composables/menu';

export default defineComponent({
  name: "CMenu",
  setup: (props, { slots, expose }) => {
    const { element, styleSetter } = useElement("csss-menu");
    const { property } = useCssCustomProperty<Partial<CMenuCssCustomProperties>>(styleSetter);
    const { classList: menuClassList } = useMenu();

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
        <article ref={element} class={ menuClassList.value}>
        </article>
      );
    };
  },
});
