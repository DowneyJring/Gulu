const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "Gulu",
  description: 'vdoing博客主题模板',
  base: '/Gulu/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "f2182596f7e1bf853d43",
        clientSecret: "ff8a750e85ef45edc4432784b1a3ed552ec97c11",
        owner: "RubyJag527",
        repo: "Gulu",
      },
    ],
  ],
  themeConfig,
}
