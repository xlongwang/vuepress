---
title: 测试博客WEB
date: 2019-09-23 20:47:18
blog: true
tags:
    - webpack
---

这是我测试的第一个博客 

 {{ 10 + 10 }} 

<span v-for="i in 3">{{ i }} </span> 

:tada: :100:


## 内部链接

[Home](/) <!-- 跳转到根部的 README.md -->
[blog](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->

提供了对 YAML front matter 开箱即用
