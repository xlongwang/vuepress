(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{456:function(t,e,a){"use strict";a.r(e);var r=a(1),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js","aria-hidden":"true"}},[t._v("#")]),t._v(" Node.js")]),t._v(" "),a("p",[t._v("本文档将会介绍我们在开发Node.js应用时会用到的一些工具")]),t._v(" "),a("h3",{attrs:{id:"nvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvm","aria-hidden":"true"}},[t._v("#")]),t._v(" nvm")]),t._v(" "),a("p",[t._v("管理Node.js版本，通过"),a("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm"),a("OutboundLink")],1),t._v("我们可以同时安装/切换不同的Node.js版本")]),t._v(" "),a("h4",{attrs:{id:"安装nvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nvm","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装nvm")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash\n")])])]),a("h4",{attrs:{id:"添加环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加环境变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加环境变量")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ vim ~/.zshrc\n\n在尾部添加以下配置\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion\n')])])]),a("h4",{attrs:{id:"使用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ nvm ls-remote // 列出所有支持的Node.js版本\n$ nvm ls // 列出本地已安装的Node.js版本\n$ nvm install 11.5.0 // 安装指定的Node.js版本\n$ nvm alias default 11 // 设置默认使用的版本\n")])])]),a("h3",{attrs:{id:"nrm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nrm","aria-hidden":"true"}},[t._v("#")]),t._v(" nrm")]),t._v(" "),a("p",[t._v("使用"),a("a",{attrs:{href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"}},[t._v("nrm"),a("OutboundLink")],1),t._v("可以让我们来切换不同的npm源而不用单独安装cnpm之类的库")]),t._v(" "),a("h4",{attrs:{id:"安装nrm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nrm","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装nrm")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npm install -g nrm\n")])])]),a("h4",{attrs:{id:"使用命令-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用命令-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ nrm ls // 列出当前支持切换的源\n$ nrm use taobao // 使用taobao的源作为默认的npm源\n")])])]),a("h3",{attrs:{id:"实用模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实用模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 实用模块")]),t._v(" "),a("p",[t._v("下面来介绍一些实用的Node.js模块")]),t._v(" "),a("h4",{attrs:{id:"http-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-server","aria-hidden":"true"}},[t._v("#")]),t._v(" http-server")]),t._v(" "),a("p",[t._v("使用"),a("a",{attrs:{href:"https://www.npmjs.com/package/http-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("http-server"),a("OutboundLink")],1),t._v("我们可以快速的创建一个本地http server服务，并且托管我们当前目录作为静态资源文件夹而不用特地去用Node.js框架来搭建一个静态资源服务")]),t._v(" "),a("h5",{attrs:{id:"使用http-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用http-server","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用http-server")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npm install http-server -g // 安装http-server模块\n$ http-server . -p 8080 // 监听8080端口，以当前目录作为静态资源目录\n")])])]),a("h4",{attrs:{id:"promisify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promisify","aria-hidden":"true"}},[t._v("#")]),t._v(" promisify")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://nodejs.cn/api/util.html#util_util_promisify_original",target:"_blank",rel:"noopener noreferrer"}},[t._v("util.promisify"),a("OutboundLink")],1),t._v("是Node.js的官方API，使用该API我们可以将callback形式的Node.js API包装为Promise的形式,只要符合最后一个参数是callback，并且callback第一个参数是错误处理的API都可以通过promisify来包装")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" promisify "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'util'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" exec "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child_process'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" execWithPromise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("promisify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("installServer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" stdout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execWithPromise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("npm i -g http-server")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"mdv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mdv","aria-hidden":"true"}},[t._v("#")]),t._v(" mdv")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/mdv",target:"_blank",rel:"noopener noreferrer"}},[t._v("mdv"),a("OutboundLink")],1),t._v("是一个用来校验markdown语法的npm模块，此模块检测的语法错误类型包括七项：插入图片时是否添加Alt标签，超链接是否包含链接名称，页面内跳转时是否缺失锚点，页面内跳转的地址是否包含#，锚点是否包含#，锚点是否重复定义，json、xml语法是否解析失败。")]),t._v(" "),a("h5",{attrs:{id:"安装使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装使用")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ npm i -g mdv\n$ mdv xxx.md -d // 检测md文件语法\n$ mdv xxx.md -s // 根据md生成html\n")])])]),a("h5",{attrs:{id:"错误类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误类型")]),t._v(" "),a("ul",[a("li",[t._v("重复链接 - "),a("code",[t._v("duplicatedAnchors[]")])]),t._v(" "),a("li",[t._v("锚点地址错误 - "),a("code",[t._v("anchorsWithHash[]")])]),t._v(" "),a("li",[t._v("空的链接 - "),a("code",[t._v("anchorsWithEmptyText[]")])]),t._v(" "),a("li",[t._v("img标签缺少alt属性 tag - "),a("code",[t._v("imagesWithMissingAlt[]")])]),t._v(" "),a("li",[a("code",[t._v("yaml")]),t._v(", "),a("code",[t._v("json")]),t._v(", "),a("code",[t._v("xml")]),t._v(" or "),a("code",[t._v("abnf")]),t._v(" 语法解析错误 - "),a("code",[t._v("nonParsingExamples[]")])])]),t._v(" "),a("h3",{attrs:{id:"使用-npm-link-调试模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-npm-link-调试模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 npm link 调试模块")]),t._v(" "),a("p",[t._v("熟练的使用npm link可以帮助我们本地调试任何开源项目，当我们的一个项目还没有发布到npmjs.com想在本地测试时，或者当我们想修改React/Vue的源码想在本地测试效果时，我们都需要使用npm link来进行测试。npm link 类似于Linux中的软链接，简单理解可以理解为一个快捷方式。使用方式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd vue // 进入本地clone下来的vue文件夹\n$ npm link // 如果没有全局安装过vue 此时会创建全局node_modules下的一个软链接vue指向本地clone的vue入口文件\n$ npm link vue // 在需要用调试vue模块的应用执行该命令会将当前应用的node_modules/vue指向全局node_modules/vue软链接\n")])])]),a("p",[a("img",{attrs:{src:"https://gw.alicdn.com/tfs/TB1iEl0XKH2gK0jSZFEXXcqMpXa-1450-876.jpg",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://gw.alicdn.com/tfs/TB1QBh0XQY2gK0jSZFgXXc5OFXa-1450-860.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"vs-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vs-code","aria-hidden":"true"}},[t._v("#")]),t._v(" VS Code")]),t._v(" "),a("p",[t._v("VS Code毫无疑问是目前最强大的编辑器，没有之一，凭借自身丰富的插件体系以及优秀的断点调试能力迅速成为最火热的编辑器。")]),t._v(" "),a("h3",{attrs:{id:"安装vs-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装vs-code","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装VS Code")]),t._v(" "),a("p",[t._v("这个不多介绍，直接去"),a("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1),t._v("下载安装包安装")]),t._v(" "),a("h3",{attrs:{id:"code命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code命令","aria-hidden":"true"}},[t._v("#")]),t._v(" code命令")]),t._v(" "),a("p",[t._v("打开 VS Code，打开控制面板（⇧⌘P）, 输入 "),a("code",[t._v("shell command")]),t._v(" ，在提示里看到 "),a("code",[t._v('Shell Command: Install "code" command in PATH')]),t._v("，运行它就可以了。")]),t._v(" "),a("p",[t._v("然后，在终端里，通过 "),a("code",[t._v("code .")]),t._v(" 或 "),a("code",[t._v("code xx")]),t._v(" 直接打开目录或文件。")]),t._v(" "),a("h3",{attrs:{id:"快捷键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快捷键","aria-hidden":"true"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),a("p",[t._v("熟练使用VS Code快捷键是必备技能")]),t._v(" "),a("h4",{attrs:{id:"左边栏快捷键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#左边栏快捷键","aria-hidden":"true"}},[t._v("#")]),t._v(" 左边栏快捷键")]),t._v(" "),a("p",[a("code",[t._v("cmd + k + s")]),t._v(" -> "),a("code",[t._v("keybinds.json")])]),t._v(" "),a("p",[t._v("添加以下配置")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "key": "cmd+1",\n    "command": "workbench.view.explorer"\n}, {\n    "key": "cmd+2",\n    "command": "workbench.view.search"\n}, {\n    "key": "cmd+3",\n    "command": "workbench.view.scm"\n}, {\n    "key": "cmd+4",\n    "command": "workbench.view.debug"\n}, {\n    "key": "cmd+5",\n    "command": "workbench.view.extensions"\n}\n')])])]),a("p",[t._v("添加完毕后我们可以通过cmd + 数字键的组合方式来快速切换左边栏")]),t._v(" "),a("h4",{attrs:{id:"其他快捷键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他快捷键","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他快捷键")]),t._v(" "),a("p",[t._v("以下介绍实际使用VS Code中经常需要用到的快捷键")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("cmd + p")]),t._v(" 根据关键字快速打开一个文件")]),t._v(" "),a("li",[a("code",[t._v("cmd + ,")]),t._v(" 打开VS Code配置项")]),t._v(" "),a("li",[a("code",[t._v("cmd + d")]),t._v(" 快速选取多个相同的内容块")]),t._v(" "),a("li",[a("code",[t._v("option + shift + 鼠标左键")]),t._v(" 让光标多行选取")]),t._v(" "),a("li",[a("code",[t._v("cmd + shift + h")]),t._v(" 全局替换内容")])]),t._v(" "),a("h3",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("p",[t._v("在这里我们介绍前端开发中需要经常用到的一些插件")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Auto Close Tag")]),t._v(" 帮助我们自动闭合标签")]),t._v(" "),a("li",[a("code",[t._v("Auto Import")]),t._v(" 自动找寻import路径, 在开发ts的时候经常用到")]),t._v(" "),a("li",[a("code",[t._v("Code Spell Checker")]),t._v(" 帮助我们检查名词的拼写")]),t._v(" "),a("li",[a("code",[t._v("GitLens")]),t._v(" 展示该代码块的commit信息")]),t._v(" "),a("li",[a("code",[t._v("Icon Fonts")]),t._v(" 为不同的文件设置不同的ICON")]),t._v(" "),a("li",[a("code",[t._v("JavaScript (ES6) code snippets")]),t._v(" 让编辑器自动联想es6语法")]),t._v(" "),a("li",[a("code",[t._v("Markdown Preview")]),t._v(" 预览md文件")]),t._v(" "),a("li",[a("code",[t._v("StandardJS")]),t._v(" JavaScript 代码规范配套的VS Code插件，下面我们会介绍为什么使用standardjs而不是eslint")]),t._v(" "),a("li",[a("code",[t._v("React Standard Style")]),t._v(" 同上，在React组件中使用standardjs代码规范")]),t._v(" "),a("li",[a("code",[t._v("Vetur")]),t._v(" 开发Vue组件的辅助工具")]),t._v(" "),a("li",[a("code",[t._v("Minify")]),t._v(" 自动生成经过uglify后的文件")])]),t._v(" "),a("h4",{attrs:{id:"standardjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standardjs","aria-hidden":"true"}},[t._v("#")]),t._v(" Standardjs")]),t._v(" "),a("p",[t._v("这里我们着重介绍一下"),a("a",{attrs:{href:"https://standardjs.com/readme-zhcn.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Standardjs"),a("OutboundLink")],1),t._v("这个代码规范工具，为什么我们使用它而不是eslint呢，这里我引用standardjs官方的介绍")]),t._v(" "),a("ul",[a("li",[t._v("无须配置。 史上最便捷的统一代码风格的方式，轻松拥有。")]),t._v(" "),a("li",[t._v("自动代码格式化。 只需运行 standard --fix 从此和脏乱差的代码说再见。")]),t._v(" "),a("li",[t._v("提前发现风格及程序问题。 减少代码审查过程中反反复复的修改过程，节约时间。")])]),t._v(" "),a("p",[t._v("如果我不同意某条规则，可以改吗？")]),t._v(" "),a("p",[a("span",{staticStyle:{color:"red"}},[t._v("不行。制定这套 standard 规范的目的就是让大家都不必再花时间浪费在无谓的代码风格之争上面了。关于缩进该用制表符还是空格这个问题已经争论了很久了，永远也没有答案。争论这个都可以把需求提前写完了。遵循 standard 规范，你就不用再犹豫了，毕竟不管怎样争论总归会选择一种风格的。希望大家也能在个人语义和普适价值上做一个权衡。")])]),t._v(" "),a("p",[t._v("如果你非要自己去配置成百上千项的 ESLint 规则，那你可以直接使用 eslint-config-standard 来将个人配置包装在上层。")]),t._v(" "),a("p",[t._v("小贴士："),a("span",{staticStyle:{color:"red"}},[t._v("选择 standard 然后保持吧。把时间留下来解决其他有意义的问题！(^____^)/")])]),t._v(" "),a("h5",{attrs:{id:"更好的使用standardjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更好的使用standardjs","aria-hidden":"true"}},[t._v("#")]),t._v(" 更好的使用Standardjs")]),t._v(" "),a("p",[t._v("在VS Code安装standardjs插件后，我们还需要进行一些配置来启用standardjs，首先要保证你在全局或者当前目录安装了standard模块，然后\n"),a("code",[t._v("cmd + ,")]),t._v(" 打开配置，添加 "),a("code",[t._v('"standard.autoFixOnSave": true, "standard.enable": true,')]),t._v(" 来让VS Code启用standard，此时在你不符合规范的地方会给你高亮提示，并且开启保存自动格式化功能，在你保存文件时自动格式化你的文件。")]),t._v(" "),a("h2",{attrs:{id:"chrome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome","aria-hidden":"true"}},[t._v("#")]),t._v(" Chrome")]),t._v(" "),a("p",[t._v("目前最流行，最强大的浏览器，也是前端开发必备的浏览器。下面我们来介绍使用Chrome浏览器的一些小技巧。")]),t._v(" "),a("h3",{attrs:{id:"快捷键-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快捷键-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),a("p",[t._v("老生常谈，任何常用的应用的快捷键都必须熟练使用，玩得66的, 下面介绍常用的快捷键，再次声明本文档不是大而全的文档，Chrome快捷键组合大概有几十种，但我们只需要记住最常用的几种就行了")]),t._v(" "),a("p",[t._v("Chrome快捷键和前面讲到的iterm2, VS Code快捷键几乎一样，事实证明优秀的设计是每个应用都会共同遵守的")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("cmd")]),t._v(" + "),a("code",[t._v("T")]),t._v(" 打开一个新的Tab")]),t._v(" "),a("li",[a("code",[t._v("cmd")]),t._v(" + "),a("code",[t._v("数字键")]),t._v(" 快速跳转到和数字键对应的Tab， "),a("code",[t._v("cmd + 9")]),t._v(" 跳转到最后一个tab")]),t._v(" "),a("li",[a("code",[t._v("cmd")]),t._v(" + "),a("code",[t._v("shift")]),t._v(" + "),a("code",[t._v("N")]),t._v(" 以无痕模式打开新窗口")]),t._v(" "),a("li",[a("code",[t._v("cmd")]),t._v(" + "),a("code",[t._v("w")]),t._v(" 关闭当前窗口")]),t._v(" "),a("li",[a("code",[t._v("cmd")]),t._v(" + "),a("code",[t._v("N")]),t._v(" 打开一个新的浏览器窗口")])]),t._v(" "),a("h3",{attrs:{id:"插件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("p",[t._v("Chrome的"),a("a",{attrs:{href:"https://chrome.google.com/webstore/category/extensions?hl=zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件商店"),a("OutboundLink")],1),t._v("的强大程度无与伦比，下面来介绍我们开发中经常用到的一些插件")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg",target:"_blank",rel:"noopener noreferrer"}},[t._v("沙拉查词"),a("OutboundLink")],1),t._v(" 必装的插件，划词翻译功能是我目前用过的最舒服的")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/afpbjjgbdimpioenaedcjgkaigggcdpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quick QR"),a("OutboundLink")],1),t._v(" 必装的插件，将链接转换为二维码")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/blipmdconlkpinefehnmjammfjpmpbjk",target:"_blank",rel:"noopener noreferrer"}},[t._v("lighthouse"),a("OutboundLink")],1),t._v(" Google官方出品，可以分析出你的网页的性能数据，以及列出可以优化的点")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/bcjindcccaagfpapjjmafapmmgkkhgoa",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Formatter"),a("OutboundLink")],1),t._v(" 格式化JSON文件，让你在浏览器打开JSON文件时获得更愉悦的体验")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/fmkadmapgofadopljbjfkapdkoienihi",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Developer Tools"),a("OutboundLink")],1),t._v(" 开发React应用时用的辅助工具，大部分人应该都装了")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/nhdogjmejiglipccpnnnanhbledajbpd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js devtools"),a("OutboundLink")],1),t._v(" 同上，开发Vue应用时的辅助工具")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/bkhaagjahfmjljalopjnoealnfndnagc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Octotree"),a("OutboundLink")],1),t._v(" 方便你查看github项目结构")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp",target:"_blank",rel:"noopener noreferrer"}},[t._v("OctoLinker"),a("OutboundLink")],1),t._v(" 查看github文件时可以一键打开引入文件的路径")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/nlfbmbojpeacfghkpbjhddihlkkiljbi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Allow-Control-Allow-Origin"),a("OutboundLink")],1),t._v(" 为不支持跨域请求的接口的响应头加Allow-Control-Allow-Origin: *")])])])}),[],!1,null,null,null);e.default=s.exports}}]);