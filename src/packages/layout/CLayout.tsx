import "./layout.css";

import { defineComponent } from 'vue';
import { useElement } from "../composables/element";
import { useAside } from './composables/aside';
import { useFooter } from './composables/footer';
import { useHeader } from './composables/header';
import { useLayout } from './composables/layout';

export default defineComponent({
  name: "CLayout",
  setup: (props, { slots, expose }) => {
    const { element, styleSetter } = useElement("csss-layout");
    const { setHeaderHeightSize } = useHeader(styleSetter, slots.header);
    const { setAsideWidthSize } = useAside(styleSetter, slots.aside);
    const { setFooterHeightSize } = useFooter(styleSetter, slots.footer);
    const { setValue, setLayoutType } = useLayout(styleSetter);

    expose({
      setHeaderHeightSize,
      setAsideWidthSize,
      setFooterHeightSize,
      setValue,
      setLayoutType
    });

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
