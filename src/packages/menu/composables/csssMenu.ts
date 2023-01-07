import { useComponent } from "@/packages/composables/Comp";
import { defer } from "lodash-es";
import { watch } from "vue";

/**
 * @description use csss menu composable
 */
export const useCsssMenu = (props?: UseCsssMenuProps) => {
  const component = useComponent<CMenuApi, UseCsssMenuProps>(props);

  const init = watch(component.COMP, (el) => {
    if (!props) return;
    defer(() => {
      if (props.style?.classList?.items) el!.style!.classList!.items = props.style.classList.items;
    });

    init();
  });

  return {
    ...component,
  };
};
