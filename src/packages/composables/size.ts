import { useGenerator } from './generator';
import type { StyleSetter } from '../../tool/styleSetter.tool';
import type { Ref } from 'vue';
import { watchEffect, unref } from 'vue';
import { isNumber } from 'lodash-es';

/**
 * @description generate a size for component style detail
 */
export const useSize = <T>(styleSetter: Ref<StyleSetter | undefined>, key: string, defaultValue: T = "normal" as T) => {
  const { generator: size } = useGenerator<T>(defaultValue);

  watchEffect(() => {
    if (isNumber(size.value)) unref(styleSetter)?.setRemNumber(size.value, key);
    else unref(styleSetter)?.setStyleSize(key, size.value);
  });

  return { size };
};