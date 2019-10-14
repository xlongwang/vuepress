const dayjs = require('dayjs');

module.exports = [
  require('./my-frontmatter/index.js'),
  require('./my-md5/index.js'),
  'vuepress-plugin-viewer',
  ['@vuepress/google-analytics', { ga: 'UA-124601890-2' }],
  '@vuepress/back-to-top',
  [
    '@vuepress/last-updated',
    {
      transformer: timestamp => {
        return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss');
      }
    }
  ],
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: '发现页面有新内容',
        buttonText: '刷新'
      }
    }
  ]
];
