module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    collectCoverage: true,
    collectCoverageFrom: [
      '**/*.{js,vue}',
      '!**/node_modules/**',
      '!**/*.config.js',
      '!**/vendor/**',
      '!**/index.js/**',
      '!**/tests/unit/**',
      '!**/tests/e2e/**',
      '!**/coverage/**',
      '!**/plugins/bootstrap-vue.js**',
      '!**/src/registerServiceWorker.js**',
      // '!**/service/apiServices.js**',
       '!**/store/store.js**',
  
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
  