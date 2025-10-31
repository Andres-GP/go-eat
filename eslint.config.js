import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
  recommend: true,
});

export default [
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('prettier'),
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
    },
  },
];
