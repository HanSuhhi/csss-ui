import { useGenerator } from './generator';

/**
 * @description generate a size for component style detail
 */
export const useSize = <T>(defaultValue: T = "normal" as T) => {
  const { generator: size } = useGenerator<T>(defaultValue);
  return { size };
};