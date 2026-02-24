import js from '@eslint/js'

export default [
  {
    ignores: ['.next', 'node_modules', 'dist', 'build', '.vercel'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: undefined,
    },
    rules: {
      'no-console': 'warn',
    },
  },
]
