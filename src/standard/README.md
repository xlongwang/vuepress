---
title: "前端编码规范"
blog: true
---

## js 规范

- js 规范采用`standard`标准，[规则](https://standardjs.com/rules.html)

## css 规范

- css 命名规范采用[BEM 命名规范](https://juejin.im/post/5b925e616fb9a05cdd2ce70d)

## git 规范

- commit 规范建议采用阮老师的[[Commit]编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
- 公式：\<type\>(scope): \<subject\>
  - type: commit 类别。只允许使用下面 7 个标识(feat, fix, docs, style, refactor, test, chore(构建过程或辅助工具的变动))
  - 增加一个新的标识 bundle
  - scope: 用于说明`commit`影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
  - subject：是`commit`目的的简短描述

## 其它规范
- 缩进，tab、tab、tab！！！

- 换行
    - 作用域不一样时就需要换行
    - if else catch 这样的语句后面必须换行

- 注释
    - 添加有必要的注释
    - 公共组件在文件前面必须要有详细的注释，包括但不限于，调用形式，每个参数的作用、取值范围及参数间的关系

- 大括号
    - 函数的左括号紧挨之后函数名，右括号和大括号之前有空格
    - 右括号和{在同一行
    - 任何时候不要省略大括号，if while for 这类语句的执行体总是用{}括号，括起来，即使只有一条执行语句
    例子
    ```
    function thisIsAnExample() {
        //to do
    }
    ```

- 分号
    - 总是使用分号
    - 总是使用分号
    - 总是使用分号
    - 重要的事情说三遍

- 其它注意点
    - 函数和变量在调用前声明
    - 内部函数应该在 声明内部变量的语句之后

### 1、定义
a、驼峰法 thisIsAnExample
b、全部大写加下划线的命名 THIS_IS_AN_EXAPMLE
c、下划线开头 \_thisIsAnExample
d、中划线分割 this-is-an-example

### 2、规范
a、变量名，参数名，函数名，方法属性 以驼峰规则命名
b、私有，保护类型用下划线开头
c、常量名 全部大写下划线的命名
d、文件和文件夹 命名全小写并以 - 来分割 例如：jquery-1.11.1.min.js
e、所有的变量名，必须要有语义，杜绝没有意义的 a b 这类的变量名
f、文件后缀名必须按照实际意义来区分，js，html，tpl，css，里面存的都是对应的内容
g、命名不能以数字，特殊字符开头

### 直播相关规范
1、代码中任何需要使用请求资源的地方，不允许在代码中出现\*\*\*.xunlei.com 的字符串，统一使用 constant.js 里面的配置
