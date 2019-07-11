const pkg = require('./package');

module.exports = {
  'plugins': [
    'root',
    'react-hooks',
  ],
  'settings': {
    'react': {
      'version': pkg.dependencies.react,
    },
  },
  'extends': [
    'plugin:root/recommended',
    'plugin:root/jest',
  ],
  'rules': {
    'react/jsx-no-bind': ['warn', {
      'ignoreRefs': false,
      'allowArrowFunctions': true,
      'allowBind': false,
    }],
    'react/jsx-curly-brace-presence': ['error', {
      'props': 'always',
      'children': 'ignore',
    }],
    'react/jsx-sort-props': ['error', {
      'callbacksLast': false,
      'shorthandFirst': true,
      'ignoreCase': true,
      'noSortAlphabetically': false,
      'reservedFirst': false,
    }],
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'react/jsx-no-bind': ['error', { 'allowArrowFunctions': true }],
    'root/prevent-relative-paths': 'error',
    'root/prevent-use-of-window-location': 'error',
    'root/prefer-root-text': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
}
