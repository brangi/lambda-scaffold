const extensions = ['.ts', '.js', '.json']

module.exports = {
  env: {
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions,
      },
    },
    'import/extensions': extensions,
  },
  overrides: [
    {
      files: [
        '**/**.it-test.{j,t}s',
        '**/**.test.{j,t}s',
        'jest.setup.js',
        '**/__tests__/**',
        'jest.setup.js',
        '**/__mocks__/**',
        '**/test/**',
      ],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        'prefer-destructuring': ['error', { object: true, array: false }],
      },
    },
  ],
}
