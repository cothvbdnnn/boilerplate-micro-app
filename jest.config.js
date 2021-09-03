module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: ['./tests/unit/setup.js'],
  moduleNameMapper: {
    "@bizfly/shared": "<rootDir>/src/__mocks__/shared.js",
    "bizfly-ui": "<rootDir>/src/__mocks__/shared.js"
  }
}
