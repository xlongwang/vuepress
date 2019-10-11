const moment = require('moment');

module.exports = {
	title: 'Frontend Blog',
	dest: './public',
	home: true,
	themeConfig: {
		base: '/vuepress/',
		lastUpdated: 'Last Updated',
		nav: [
			{ text: '首页', link: '/' }, 
			{ text: 'Blog', link: '/blog/' },
			{ text: '组件文档', link: '/baseComponents/' },
			{ text: '常见问题', link: '/qa/' },
			{ text: '历史更新', link: '/archive/' }
		], 
		logo: '/logo.png',
		docsDir: 'src',
		pageSize: 8,
		startPage: 0,
		sidebar: 'auto',
		sidebar: {
			'/standard/': [
				''
			  ],

			'/qa/': [
				''
			],
			'/baseComponents/': [
				'',
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
			'@vuepress/google-analytics',
			{
			  'ga': '' // UA-00000000-0
			}
		],
		[
			'@vuepress/last-updated',
			{
			  transformer: (timestamp, lang) => {
				const moment = require('moment')
				moment.locale(lang)
				return moment(timestamp).fromNow()
			  }
			}
		  ],
		['@vuepress/back-to-top'],
		'vuepress-plugin-reading-time'
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
