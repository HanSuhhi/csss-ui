import "./layout.css";

import { defineComponent, reactive } from 'vue';
import { useElement } from "../composables/element";
import { useAside } from './composables/aside';
import { useFooter } from './composables/footer';
import { useHeader } from './composables/header';
import { useLayout } from './composables/layout';
import { useCssCustomProperty } from '../composables/cssCustomProperty';

export default defineComponent({
  name: "CLayout",
  setup: (props, { slots, expose }) => {
    const { element, styleSetter } = useElement("csss-layout");
    const { property } = useCssCustomProperty<Partial<CLayoutCssCustomProperties>>(styleSetter);
    const { headerHeightSize } = useHeader(styleSetter, slots.header);
    const { asideWidthSize } = useAside(styleSetter, slots.aside);
    const { footerHeightSize } = useFooter(styleSetter, slots.footer);
    const { layoutType } = useLayout(styleSetter);

    const exposeVal: CLayoutApi = reactive({
      read: {},
      state: {},
      style: {
        headerHeightSize,
        asideWidthSize,
        footerHeightSize,
        layoutType,
        property
      }
    });

    expose(exposeVal);

    return () => {
      return (
        <article ref={element} class="csss-layout">
          {slots.header && <header class="csss-layout__header">{slots.header?.()}</header>}
          {slots.aside && <aside class="csss-layout__aside">{slots.aside?.()}</aside>}
          <main class="csss-layout__main">{slots.default?.()}</main>
          {slots.footer && <footer class="csss-layout__footer">{slots.footer?.()}</footer>}
        </article>
      );
    };
  },
});
