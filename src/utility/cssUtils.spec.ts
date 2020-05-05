import { getClassNames } from '@utility/cssUtils';

describe('getClassNames', () => {
  describe('String parameters (no object)', () => {
    it('should have the class name', () => {
      const className = 'class-name';
      const result = getClassNames(className);

      const expectedResult = className;
      expect(result).toEqual(expectedResult);
    });

    it('should have all class names separated by space', () => {
      const className1 = 'class-name-1';
      const className2 = 'class-name-2';
      const className3 = 'class-name-3';
      const result = getClassNames(className1, className2, className3);

      const expectedResult = `${className1} ${className2} ${className3}`;
      expect(result).toEqual(expectedResult);
    });
  });

  describe('Undefined parameters', () => {
    it('should ignore undefined parameters', () => {
      const className = 'class-name';
      const result = getClassNames(undefined, className, undefined);

      expect(result).toEqual(className);
    })
  })

  describe('Object parameters', () => {
    it('should have the class name', () => {
      const className = 'class-name';
      const result = getClassNames({
        [className]: true
      });

      const expectedResult = className;
      expect(result).toEqual(expectedResult);
    });

    it('should have all class names separated by space', () => {
      const className1 = 'class-name-1';
      const className2 = 'class-name-2';
      const className3 = 'class-name-3';
      const result = getClassNames({
        [className1]: true,
        [className2]: true,
        [className3]: true
      });

      const expectedResult = `${className1} ${className2} ${className3}`;
      expect(result).toEqual(expectedResult);
    });

    it('should not have class name whose value is false', () => {
      const className1 = 'class-name-1';
      const className2 = 'class-name-2';
      const className3 = 'class-name-3';
      const result = getClassNames({
        [className1]: true,
        [className2]: false,
        [className3]: true
      });

      const expectedResult = `${className1} ${className3}`;
      expect(result).toEqual(expectedResult);
    });
  });

  describe('Mix of Object and String parameters', () => {
    it('should have all class names separated by space', () => {
      const className1 = 'class-name-1';
      const className2 = 'class-name-2';
      const result = getClassNames(className1, {
        [className2]: true
      });

      const expectedResult = `${className1} ${className2}`;
      expect(result).toEqual(expectedResult);
    });
  });
});
