---
title: "开发环境"
date: "2019-08-23"
--- 

## Node.js

本文档将会介绍我们在开发Node.js应用时会用到的一些工具

### nvm

管理Node.js版本，通过[nvm](https://github.com/nvm-sh/nvm)我们可以同时安装/切换不同的Node.js版本

#### 安装nvm

```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

#### 添加环境变量

```
$ vim ~/.zshrc

在尾部添加以下配置
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

#### 使用命令

```
$ nvm ls-remote // 列出所有支持的Node.js版本
$ nvm ls // 列出本地已安装的Node.js版本
$ nvm install 11.5.0 // 安装指定的Node.js版本
$ nvm alias default 11 // 设置默认使用的版本
```

### nrm

使用[nrm](https://github.com/Pana/nrm)可以让我们来切换不同的npm源而不用单独安装cnpm之类的库

#### 安装nrm

```
$ npm install -g nrm
```

#### 使用命令

```
$ nrm ls // 列出当前支持切换的源
$ nrm use taobao // 使用taobao的源作为默认的npm源
```

### 实用模块

下面来介绍一些实用的Node.js模块

#### http-server

使用[http-server](https://www.npmjs.com/package/http-server)我们可以快速的创建一个本地http server服务，并且托管我们当前目录作为静态资源文件夹而不用特地去用Node.js框架来搭建一个静态资源服务

##### 使用http-server

```
$ npm install http-server -g // 安装http-server模块
$ http-server . -p 8080 // 监听8080端口，以当前目录作为静态资源目录
```

#### promisify

[util.promisify](http://nodejs.cn/api/util.html#util_util_promisify_original)是Node.js的官方API，使用该API我们可以将callback形式的Node.js API包装为Promise的形式,只要符合最后一个参数是callback，并且callback第一个参数是错误处理的API都可以通过promisify来包装

```js
const { promisify } = require('util')
const { exec } = require('child_process')
const execWithPromise = promisify(exec)
const installServer = async () => {
    const { stdout } = await execWithPromise(`npm i -g http-server`)
}
```

#### mdv

[mdv](https://www.npmjs.com/package/mdv)是一个用来校验markdown语法的npm模块，此模块检测的语法错误类型包括七项：插入图片时是否添加Alt标签，超链接是否包含链接名称，页面内跳转时是否缺失锚点，页面内跳转的地址是否包含#，锚点是否包含#，锚点是否重复定义，json、xml语法是否解析失败。

##### 安装使用

```
$ npm i -g mdv
$ mdv xxx.md -d // 检测md文件语法
$ mdv xxx.md -s // 根据md生成html
```

##### 错误类型

- 重复链接 - `duplicatedAnchors[]`
- 锚点地址错误 - `anchorsWithHash[]`
- 空的链接 - `anchorsWithEmptyText[]`
- img标签缺少alt属性 tag - `imagesWithMissingAlt[]`
- `yaml`, `json`, `xml` or `abnf` 语法解析错误 - `nonParsingExamples[]`

### 使用 npm link 调试模块

熟练的使用npm link可以帮助我们本地调试任何开源项目，当我们的一个项目还没有发布到npmjs.com想在本地测试时，或者当我们想修改React/Vue的源码想在本地测试效果时，我们都需要使用npm link来进行测试。npm link 类似于Linux中的软链接，简单理解可以理解为一个快捷方式。使用方式：

```
$ cd vue // 进入本地clone下来的vue文件夹
$ npm link // 如果没有全局安装过vue 此时会创建全局node_modules下的一个软链接vue指向本地clone的vue入口文件
$ npm link vue // 在需要用调试vue模块的应用执行该命令会将当前应用的node_modules/vue指向全局node_modules/vue软链接
```

![](https://gw.alicdn.com/tfs/TB1iEl0XKH2gK0jSZFEXXcqMpXa-1450-876.jpg)
![](https://gw.alicdn.com/tfs/TB1QBh0XQY2gK0jSZFgXXc5OFXa-1450-860.jpg)

## VS Code

VS Code毫无疑问是目前最强大的编辑器，没有之一，凭借自身丰富的插件体系以及优秀的断点调试能力迅速成为最火热的编辑器。

### 安装VS Code

这个不多介绍，直接去[官网](https://code.visualstudio.com/)下载安装包安装

### code命令

打开 VS Code，打开控制面板（⇧⌘P）, 输入 `shell command` ，在提示里看到 `Shell Command: Install "code" command in PATH`，运行它就可以了。

然后，在终端里，通过 `code .` 或 `code xx` 直接打开目录或文件。

### 快捷键

熟练使用VS Code快捷键是必备技能

#### 左边栏快捷键

 `cmd + k + s` -> `keybinds.json` 

添加以下配置

``` 
{
    "key": "cmd+1",
    "command": "workbench.view.explorer"
}, {
    "key": "cmd+2",
    "command": "workbench.view.search"
}, {
    "key": "cmd+3",
    "command": "workbench.view.scm"
}, {
    "key": "cmd+4",
    "command": "workbench.view.debug"
}, {
    "key": "cmd+5",
    "command": "workbench.view.extensions"
}
```

添加完毕后我们可以通过cmd + 数字键的组合方式来快速切换左边栏

#### 其他快捷键

以下介绍实际使用VS Code中经常需要用到的快捷键

* `cmd + p` 根据关键字快速打开一个文件  
* `cmd + ,` 打开VS Code配置项  
* `cmd + d` 快速选取多个相同的内容块  
* `option + shift + 鼠标左键` 让光标多行选取  
* `cmd + shift + h` 全局替换内容

### 插件

在这里我们介绍前端开发中需要经常用到的一些插件

* `Auto Close Tag` 帮助我们自动闭合标签  
* `Auto Import` 自动找寻import路径, 在开发ts的时候经常用到  
* `Code Spell Checker` 帮助我们检查名词的拼写  
* `GitLens` 展示该代码块的commit信息  
* `Icon Fonts` 为不同的文件设置不同的ICON  
* `JavaScript (ES6) code snippets` 让编辑器自动联想es6语法  
* `Markdown Preview` 预览md文件  
* `StandardJS` JavaScript 代码规范配套的VS Code插件，下面我们会介绍为什么使用standardjs而不是eslint  
* `React Standard Style` 同上，在React组件中使用standardjs代码规范  
* `Vetur` 开发Vue组件的辅助工具  
* `Minify` 自动生成经过uglify后的文件  

#### Standardjs

这里我们着重介绍一下[Standardjs](https://standardjs.com/readme-zhcn.html)这个代码规范工具，为什么我们使用它而不是eslint呢，这里我引用standardjs官方的介绍

* 无须配置。 史上最便捷的统一代码风格的方式，轻松拥有。
* 自动代码格式化。 只需运行 standard --fix 从此和脏乱差的代码说再见。
* 提前发现风格及程序问题。 减少代码审查过程中反反复复的修改过程，节约时间。

如果我不同意某条规则，可以改吗？  

<span style="color:red">不行。制定这套 standard 规范的目的就是让大家都不必再花时间浪费在无谓的代码风格之争上面了。关于缩进该用制表符还是空格这个问题已经争论了很久了，永远也没有答案。争论这个都可以把需求提前写完了。遵循 standard 规范，你就不用再犹豫了，毕竟不管怎样争论总归会选择一种风格的。希望大家也能在个人语义和普适价值上做一个权衡。</span>

如果你非要自己去配置成百上千项的 ESLint 规则，那你可以直接使用 eslint-config-standard 来将个人配置包装在上层。

小贴士：<span style="color:red">选择 standard 然后保持吧。把时间留下来解决其他有意义的问题！(^____^)/</span>

##### 更好的使用Standardjs

在VS Code安装standardjs插件后，我们还需要进行一些配置来启用standardjs，首先要保证你在全局或者当前目录安装了standard模块，然后
 `cmd + ,` 打开配置，添加 `"standard.autoFixOnSave": true, "standard.enable": true,` 来让VS Code启用standard，此时在你不符合规范的地方会给你高亮提示，并且开启保存自动格式化功能，在你保存文件时自动格式化你的文件。

## Chrome

目前最流行，最强大的浏览器，也是前端开发必备的浏览器。下面我们来介绍使用Chrome浏览器的一些小技巧。

### 快捷键

老生常谈，任何常用的应用的快捷键都必须熟练使用，玩得66的, 下面介绍常用的快捷键，再次声明本文档不是大而全的文档，Chrome快捷键组合大概有几十种，但我们只需要记住最常用的几种就行了

Chrome快捷键和前面讲到的iterm2, VS Code快捷键几乎一样，事实证明优秀的设计是每个应用都会共同遵守的

* `cmd` + `T` 打开一个新的Tab    
* `cmd` + `数字键` 快速跳转到和数字键对应的Tab， `cmd + 9` 跳转到最后一个tab    
* `cmd` + `shift` + `N` 以无痕模式打开新窗口  
* `cmd` + `w` 关闭当前窗口  
* `cmd` + `N` 打开一个新的浏览器窗口  

### 插件

Chrome的[插件商店](https://chrome.google.com/webstore/category/extensions?hl=zh-CN)的强大程度无与伦比，下面来介绍我们开发中经常用到的一些插件

* [沙拉查词](https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg) 必装的插件，划词翻译功能是我目前用过的最舒服的  
* [Quick QR](https://chrome.google.com/webstore/detail/afpbjjgbdimpioenaedcjgkaigggcdpp) 必装的插件，将链接转换为二维码  
* [lighthouse](https://chrome.google.com/webstore/detail/blipmdconlkpinefehnmjammfjpmpbjk) Google官方出品，可以分析出你的网页的性能数据，以及列出可以优化的点  
* [JSON Formatter](https://chrome.google.com/webstore/detail/bcjindcccaagfpapjjmafapmmgkkhgoa) 格式化JSON文件，让你在浏览器打开JSON文件时获得更愉悦的体验  
* [React Developer Tools](https://chrome.google.com/webstore/detail/fmkadmapgofadopljbjfkapdkoienihi) 开发React应用时用的辅助工具，大部分人应该都装了  
* [Vue.js devtools](https://chrome.google.com/webstore/detail/nhdogjmejiglipccpnnnanhbledajbpd) 同上，开发Vue应用时的辅助工具  
* [Octotree](https://chrome.google.com/webstore/detail/bkhaagjahfmjljalopjnoealnfndnagc) 方便你查看github项目结构  
* [OctoLinker](https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp) 查看github文件时可以一键打开引入文件的路径  
* [Allow-Control-Allow-Origin](https://chrome.google.com/webstore/detail/nlfbmbojpeacfghkpbjhddihlkkiljbi) 为不支持跨域请求的接口的响应头加Allow-Control-Allow-Origin: *  




