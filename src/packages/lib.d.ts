/**
 * @description base size
 */
type BaseSize = "large" | "normal" | "small";

/**
 * @description css custom properties
 */
type CssCustomProperty = [key: string, value: string];

/**
 * @description component basic functions
 */
interface ComponentBase {
  setStyleValue: (cssCustomProperties: Array<CssCustomProperty>) => void;
}

/**
 * @description classes
 */
type Classes = string[];

/**
 * @description  class operations
 */
type ClassesOptions = {
  baseClass: boolean;
};

/**
 * @description set template classes
 */
type setTemplateClasses = (classes: Classes, options?: ClassesOptions) => void;
