module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars' : 0,
    'no-trailing-spaces' : 0,
    'object-curly-spacing' : 0,
    'indent' : 0,
    'semi' : 0,
    'react/jsx-indent' : 0,
    'quotes' : 0,
    'react/jsx-closing-bracket-location' : 0,
    'react/jsx-indent-props' : 0,
    'no-shadow' : 0,
    'camelcase' : 0,
    'import/no-cycle' : 0,
    'comma-dangle': 0,
    'quote-props' : 0,
    'key-spacing' : 0,
    'comma-spacing' : 0,
    'no-multi-spaces': 0,
    'padded-blocks' : 0,
    'react/destructuring-assignment' : 0,
    'arrow-parens' : 0,
    'react/jsx-props-no-spreading' : 0,
    'react/sort-comp' : 0,
    'eol-last' : 0,




    'react/function-component-definition': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'max-len': 0,
    'no-multiple-empty-lines': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [
          'Link',
        ],
        specialLink: [
          'to',
          'hrefLeft',
          'hrefRight',
        ],
        aspects: [
          'noHref',
          'invalidHref',
          'preferButton',
        ],
      },
    ],
  },
};
