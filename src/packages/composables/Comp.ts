import { parseCsssProps } from '@/tool/useCsss.tool';
import { ref, watch } from 'vue';
import { useDeconstructComponent } from '@/packages/composables/deconstructComponent';

export const useComponent = <T, E>(props?: E) => {
  const COMP = ref<T>();

  const init = watch(COMP, (el) => {
    if (!props) return;
    parseCsssProps(props, el!);

    init();
  });


  return {
    COMP,
    // @ts-ignore
    ...useDeconstructComponent<T>(COMP)
  };
};