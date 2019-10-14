const moment = require('moment');
const sidebar = require('./config/sidebar.js')
console.log(sidebar)

module.exports = {
	title: 'Frontend Blog',
	dest: './public',
	themeConfig: {
		base: '/vuepress/',
		lastUpdated: '更新于',
		repo: 'vuejs/vuepress',
		repoLabel: '贡献代码！',
		editLinks: true,
		editLinkText: '在github上编辑此页',
		navbar: true,
		nav: [
			{ text: '首页', link: '/' },
			{ text: 'Blog', link: '/dev/' },
			{ text: '组件文档', link: '/baseComponents/' },
			{
				text: '快速入门',
				items: [
					{ text: '小程序', link: '/docs/wx-dev-guide-summary/' },
					{ text: 'Web', link: '/docs/web-dev-guide-summary/' },
				]
			},
			{
				text: '文档', 
				items: [
				  {
					text: '基础能力',
					link: '/docs/base-feature/'
				  },
				  {
					text: '增值能力',
					link: '/docs/value-added-cloud-introduction/'
				  }
				]
			  },
			{ text: '常见问题', link: '/qa/' },
		],
		logo: '/logo.png',
		pageSize: 8,
		startPage: 0,
		sidebarDepth: 0,
		// sidebar,
		sidebar: {
			'/baseComponents/':[
				["基础组件/0.a1.md","a1"],
				{"title":"css","collapsable":false,"children":[["基础组件/3.css/0.button.md","button"]]}
			],
			'/dev/':[
				
				// {
				// 	title: '1.基本概念', // 侧边栏名称
				// 	collapsable: true, // 可折叠
				// 	children: [
				// 		['/dev/pro/1.基本概念/0.Web 端基本概念.md', '端基本概念'], // 你的md文件地址
				// 		['/dev/pro/1.基本概念/1.小程序端基本概念.md','小程序端基本概念'], // 你的md文件地址
				// 	]
				// }
				{
					title: 'css', // 侧边栏名称
					collapsable: true, // 可折叠
					children: [
						'css/小程序端基本概念.md', // 你的md文件地址
						'css/Web端基本概念.md', // 你的md文件地址
						'css/www', // 你的md文件地址
						'/dev/css/js', // 你的md文件地址
						'/dev/css/one' // 你的md文件地址
					]
				}
			],
			'/blog/':[
				'',
				'test',
				'info'
			]
		 }
	},
	plugins: require('./plugins/'),
	
	// [
	// 	require('./plugins/my-frontmatter/index.js'),
	// 	[
	// 		'@vuepress/google-analytics',
	// 		{
	// 			'ga': '' // UA-00000000-0
	// 		}
	// 	],
	// 	[
	// 		'@vuepress/last-updated',
	// 		{
	// 			transformer: (timestamp, lang) => {
	// 				const moment = require('moment')
	// 				moment.locale(lang)
	// 				return moment(timestamp).fromNow()
	// 			}
	// 		}
	// 	],
	// 	['@vuepress/back-to-top'],
	// 	'vuepress-plugin-reading-time'
	// ],

	head: [
		['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }]
	]
}
