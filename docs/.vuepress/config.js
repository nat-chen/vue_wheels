module.exports = {
  title: 'Vue UI Wheels',
  description: '一个好用的 UI 轮子',
  base: '/vue_wheels/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '交流', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '起步',
        children: [
          '/get_started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tabs',
        ]
      }
    ]
  }
}