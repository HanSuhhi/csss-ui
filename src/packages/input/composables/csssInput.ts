import { useComponent } from '@/packages/composables/Comp';

/**
* @description use csss input composable
*/
export const useCsssInput = (props?: UseCsssInputProps) => {
  return {
    ...useComponent<CInputApi, UseCsssInputProps>(props)
  };
};