const moment = require('moment');
const sidebar = require('./config/sidebar.js')

module.exports = {
	title: 'Frontend Blog',
	dest: './public',         //发布目录
	themeConfig: {
		lastUpdated: '更新于',
		repo: 'xlongwang/vuepress',
		repoLabel: '贡献代码！',
		editLinks: true,
		editLinkText: '在github上编辑此页',    
		navbar: true,
		nav: [
			{ text: '首页', link: '/' },
			{ text: 'Blog', link: '/blog/' },
			{ text: '组件文档', 
				items: [
					{ text: '基础组件', link: '/baseComponents/组件文档/0.基础组件/0.按钮.html' },
					{ text: '视图组件', link: '/baseComponents/组件文档/1.视图组件/0.文字链接.html' },
					{ text: '工具类组件', link: '/baseComponents/组件文档/2.工具类组件/0.组件.html' },
					{ text: '方法类函数', link: '/baseComponents/组件文档/3.方法类函数/0.组件.html' },
				]
			},
			{ text: '常见问题', link: '/qa/' },
		],
		logo: '/logo.png',
		pageSize: 8,
		startPage: 0,
		sidebarDepth: 0,
		sidebar: {
			"/baseComponents/": sidebar,     //设置侧边栏
		}
	},
	plugins: require('./plugins/'),
	head: [
		['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }]
	]
}
