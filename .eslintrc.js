module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline":"off",
    // "no-console": [true, "log", "error"],
    "no-console":"off",
    'arrow-parens': 'off',
    'no-multi-spaces':'off',
    "indent": ["off"]
  }
}
