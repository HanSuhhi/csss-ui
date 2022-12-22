import { useComponent } from '@/packages/composables/Comp';

/**
* @description use csss button composable
*/
export const useCsssButton = (props?: UseCsssButtonProps) => {
  return {
    ...useComponent<CButtonApi, UseCsssButtonProps>(props)
  };
};