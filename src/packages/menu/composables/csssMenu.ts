import { useComponent } from '@/packages/composables/Comp';

/**
* @description use csss menu composable
*/
export const useCsssMenu = (props: UseCsssMenuProps) => {
  return {
    ...useComponent<CMenuApi, UseCsssMenuProps>(props)
  };
};