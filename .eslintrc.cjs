module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@bengineer.dev/react',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};