const currentDateUTC = new Date().toUTCString()
const moment = require('moment');

module.exports = {
	title: 'Frontend Blog',
	dest: './public',
	themeConfig: {
		// repo: 'https://wwww.github.com',
		repoLabel: 'Repo',
		base: '/vuepress/',
		editLinks: false,
		displayAllHeaders: true,
		smoothScroll: true,
		lastUpdated: false, // string | boolean
		editLinkText: 'Found a bug? Help me improve this page!',
		activeHeaderLinks: true,
		nav: [
			{ text: '首页', link: '/' }, 
			{ text: 'Blog', link: '/blog/' },
			{ text: '技术分享', link: '/share/' },
			{ text: '常见问题', link: '/qa/' },
			{ text: '历史更新', link: '/archive/' }
		], 
		logo: '/logo.png',
		docsDir: 'src',
		pageSize: 5,
		startPage: 0,
		sidebar: 'auto',
		sidebar: {
			'/blog/': [
			  '',     
			  'firstBlog',
			  'info',
			],

			'/standard/': [
				''
			  ],

			'/qa/': [
				''
			],
			'/share/': [
				''
			],
			'/dev/': [
				''
			],
			'/handbook/': [
				''
			]
			
		  }
	},
	plugins: [
		[
			'@vuepress/last-updated',
			{
			  transformer: (timestamp, lang) => {
				// 不要忘了安装 moment
				const moment = require('moment')
				moment.locale(lang)
				return moment(timestamp).fromNow()
			  }
			}
		  ],
		'vuepress-plugin-reading-time',
		'vuepress-plugin-janitor'
	],
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon.png' }],
		['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
		['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
		['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
}
