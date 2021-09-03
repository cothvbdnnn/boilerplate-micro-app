module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: ['./tests/unit/setup.js'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
  },
  globals: {
    'vue-jest': {
      templateCompiler: {
        // eslint-disable-next-line
        compiler: require('vue-template-babel-compiler'),
      },
    },
  },
  moduleNameMapper: {
    "@bizfly/shared": "<rootDir>/src/__mocks__/shared.js",
    'bizfly-ui': '<rootDir>/src/__mocks__/shared.js',
  }
}
