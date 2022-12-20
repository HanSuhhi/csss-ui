import { useComponent } from '../../composables/Comp';

/**
 * @description use csss tabs composable
 */
export const useCsssTabs = (props?: UseCsssTabsProps) => {

  const { read } = useComponent<CTabsApi, UseCsssTabsProps>(props);


  return {
    ...useComponent<CTabsApi, UseCsssTabsProps>(props)
  };
};
