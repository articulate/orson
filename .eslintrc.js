module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  globals: {
    React: false
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: [
    'react',
  ],
  rules: {
    'array-bracket-spacing': ['error', 'always'],
    'camelcase': 'error',
    'comma-dangle': ['error', 'never'],
    'global-require': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-console': ['error', { allow: ['error'] }],
    'no-duplicate-imports': 'error',
    'no-eq-null': 'error',
    'no-restricted-globals': ['error', 'event'],
    'no-template-curly-in-string': 'error',
    'no-trailing-spaces': 'error',
    'no-useless-constructor': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'react/display-name': 0,
    'react/no-deprecated': 0,
    'react/no-find-dom-node': 0,
    'react/no-is-mounted': 0,
    'react/no-string-refs': 0,
    'react/no-unknown-property': 0,
    'react/prop-types': 0
  },
  settings: {
    react: {
      version: '16'
    }
  }
}
