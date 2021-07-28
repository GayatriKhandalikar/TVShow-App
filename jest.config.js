module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    collectCoverage: true,
    collectCoverageFrom: [
      '**/*.{js,vue}',
      '!**/node_modules/**',
      '!**/*.config.js',
      '!**/vendor/**',
      '!**/main.js',
      '!**/index.js/**',
      '!**/src/store/index.js/**',
      '!**/tests/unit/**',
      '!**/tests/e2e/**',
      '!**/coverage/**',
      '!**/plugins/bootstrap-vue.js**',
      '!**/src/registerServiceWorker.js**',
      // '!**/service/apiServices.js**',
       '!**/store/store.js**',
  
    ],
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
      '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    testPathIgnorePatterns: [
      '<rootDir>/test/e2e'
    ],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: -10,
      },
    },
  };
  