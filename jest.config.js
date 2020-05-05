module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    '^.+\\.tsx?$': 'ts-jest'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/config/setupEnzyme.ts'],
  coverageReporters: ['text'],
  moduleNameMapper: {
    '^@typings/(.*)$': '<rootDir>/src/typings/$1',
    '^@utility/(.*)$': '<rootDir>/src/utility/$1',
    '^@ions/(.*)$': '<rootDir>/src/ions/$1',
    '@ions': '<rootDir>/src/ions/index',
    '@colors': '<rootDir>/src/colors/colors.ts',
    '@colors/*': '<rootDir>/src/colors/*',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '@components': '<rootDir>/src/components/index'
  }
};
