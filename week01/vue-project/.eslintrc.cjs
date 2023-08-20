/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    // https://github.com/vuejs/eslint-config-typescript/blob/main/index.js
    '@vue/eslint-config-typescript',
    // eslint가 format을 하지 않고, prettier에 formatting을 맡기는 설정
    // https://github.com/vuejs/eslint-config-prettier
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // rule로 넣으려고 하는것
  // trailing comma
  // 세미콜론 끝에 없애기
}
