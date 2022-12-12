/**
 * @description 控制台警告输出
 */
export const warn = (...args: any): null => {
  console.warn(`warning: ${args.join(" ")}`);
  return null;
};
