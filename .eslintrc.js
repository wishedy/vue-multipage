// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',//非开发环境下禁止使用console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',//非开发环境下禁止使用debugger
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',//非开发环境下禁止使用alert
    "no-tabs": 0,// 禁止使用tabs
    "no-useless-escape": 0,
    "no-empty": 2,// 块语句中的内容不能为空
    "no-var": 2,//使用let和const代替var
    "no-mixed-spaces-and-tabs": 0,//不允许混用tab和空格
    "no-useless-return": 0,
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "vue/html-self-closing":0,
    "vue/no-use-v-if-with-v-for": 0
  }
}
