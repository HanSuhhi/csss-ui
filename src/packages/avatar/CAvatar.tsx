import { defineComponent } from "vue";

export default defineComponent({
  name: "CAvatar",
  setup: (props, { slots }) => {
    return () => {
      return (
        <figure class="csss-avatar">
          <main class="csss-avatar__main">{slots.default?.()}</main>
        </figure>
      );
    };
  },
});
