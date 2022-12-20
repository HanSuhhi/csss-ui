import "./layout.css";

import { defineComponent, reactive } from 'vue';
import { useElement } from "../composables/element";
import { useAside } from './composables/aside';
import { useFooter } from './composables/footer';
import { useHeader } from './composables/header';
import { useLayout } from './composables/layout';
import { useCssCustomProperty } from '../composables/cssCustomProperty';
import { useMain } from "./composables/main";

export default defineComponent({
  name: "CLayout",
  setup: (props, { slots, expose }) => {
    const { element, styleSetter } = useElement("csss-layout");
    const { property } = useCssCustomProperty<Partial<CLayoutCssCustomProperties>>(styleSetter);
    const { layoutType, classList: layoutClassList } = useLayout(styleSetter);
    const { headerHeightSize, classList: headerClassList } = useHeader(styleSetter, slots.header);
    const { asideWidthSize, classList: asideClassList } = useAside(styleSetter, slots.aside);
    const { footerHeightSize, classList: footerClassList } = useFooter(styleSetter, slots.footer);
    const { classList: mainClassList } = useMain();

    const exposeVal: CLayoutApi = reactive({
      read: {},
      state: {},
      style: {
        headerHeightSize,
        asideWidthSize,
        footerHeightSize,
        layoutType,
        classList: {
          layout: layoutClassList,
          header: headerClassList,
          aside: asideClassList,
          footer: footerClassList,
          main: mainClassList
        },
        property
      }
    });

    expose(exposeVal);

    return () => {
      return (
        <article ref={element} class={layoutClassList.value}>
          {slots.header && <header class={headerClassList.value}>{slots.header?.()}</header>}
          {slots.aside && <aside class={asideClassList.value}>{slots.aside?.()}</aside>}
          <main class={mainClassList.value}>{slots.default?.()}</main>
          {slots.footer && <footer class={footerClassList.value}>{slots.footer?.()}</footer>}
        </article>
      );
    };
  },
});
