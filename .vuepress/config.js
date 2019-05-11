const summary = require('./summary.js');

module.exports = {
    title: 'C202SAと最後の2年間',
    description: 'かわいい相棒。',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    themeConfig: {
        nav: [
            { text: 'ホーム', link: '/' },
            { text: '作品一覧', link: 'https://jamcha-aa.github.io/About/' },
            { text: 'GitHub', link: 'https://github.com/jamcha-aa/c202sa/' }
        ],
        sidebar: {
            '/article/': summary.genSidebarConfig('目次')
        },
        search: false,
    },
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }]
    ],
    base: '/c202sa/',
    dest: '.vuepress/dist',
    plugins: ['@vuepress/back-to-top'],
    markdown: {
        config: md => {
            md.use(require('markdown-it-footnote'));
        }
    }
}
