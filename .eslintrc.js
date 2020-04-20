module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'comma-dangle': 0,
    'import/extensions': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'class-methods-use-this': 0,
    'prefer-const': 0,
    'indent': 0,
    'no-tabs': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0
  },
};
