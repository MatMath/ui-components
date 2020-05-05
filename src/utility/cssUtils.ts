interface CssClasses {
  [cssClass: string]: boolean | undefined | null;
}

/**
 * Generates the CSS class names, separated by a space character.
 * @param classes A CSS class (`string`), or an `Object` with CSS classes as keys,
 * and expressions evaluable to `boolean` as values.
 * If the expression is evaluated to `true`, the CSS class will be added.
 *
 * Example: `getClassNames("class-1", { "class-2": true, "class-3": false});`
 */
export const getClassNames = (
  ...classes: (string | CssClasses | undefined)[]
): string => {
  const result: string[] = [];
  classes.forEach(value => {
    if (value) {
      if (typeof value === 'string') {
        result.push(value);
      } else {
        Object.entries(value).forEach(([className, shouldUseClassName]) => {
          if (shouldUseClassName) {
            result.push(className);
          }
        });
      }
    }
  });
  return result.join(' ');
};
