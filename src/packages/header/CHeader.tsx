import { defineComponent } from "vue";

export default defineComponent({
  name: "CHeader",
  setup: (props, { slots }) => {
    return () => {
      return (
        <header class="csss-header">
          <section class="csss-header__start">{slots.start?.()}</section>
          <section class="csss-header__end">{slots.end?.()}</section>
        </header>
      );
    };
  },
});
