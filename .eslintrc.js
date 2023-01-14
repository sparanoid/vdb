module.exports = {
  root: true,
  parserOptions: {},
  env: {
    node: true
  },
  extends: [
    'standard'
  ],
  plugins: [],
  rules: {
    'space-before-function-paren': 'off',
    'generator-star-spacing': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-undef-init': 'off',
  }
}
