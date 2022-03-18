/** @type {import('@jest/types').Config.InitialOptions} */
const jestConfig = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss|less)$'],
  moduleNameMapper: {
    '.+\\.module\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    'single-spa-react/parcel': 'single-spa-react/lib/cjs/parcel.cjs',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverageFrom: [
    'src/**/*.[jt]s?(x)',
    '!**/*.d.ts', //  Exclude all type declaration files
    '!**/node_modules/**', //  Exclude all files in node_modules
    '!**/dist/**', //  Exclude all files in the .next folder
  ],
};

module.exports = jestConfig;
