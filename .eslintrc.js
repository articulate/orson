module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: [
    'jsx-a11y',
    'react',
    'react-hooks'
  ],
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'jsx-quotes': ['error', 'prefer-double'],
    'jsx-a11y/media-has-caption': [0, {
      audio: [ 'Audio' ],
      video: [ 'Video' ],
      track: [ 'Track' ]
    }], // caption <track /> would be in child element
    'no-console': ['error', { allow: ['error'] }],
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'semi': ['error', 'never']
  },
  settings: {
    react: {
      version: '16'
    }
  }
}
