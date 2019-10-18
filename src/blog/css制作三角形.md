---
title: css制作三角形
date: 2019-09-23 20:47:18
blog: true
tags:
    - css
---

标签（空格分隔）： border clip-path polygon

---

 - 使用border制作小三角形

```css
.down{ 
	display: inline-block;
	border-width: 5px;
	border-style: dashed dashed solid;
	border-color: transparent transparent #333;
}
.up{ 
	display: inline-block;
	border-width: 5px;
	border-style:solid dashed dashed ;
	border-color:#333  transparent transparent;
}
```
 - 使用clip-path制作小三角形
```css 
.triangle {
	width: 100px;
	height: 80px;
	-webkit-clip-path: polygon(0 100%, 50% 0, 100% 100%);
	background-color:#F05050 ;
}
```

> **clip-path知识发散：**
1. polygon： 多边形，X:0 以及 Y:0 表示从元素的左上角开始，并从那里移动。 X:100% 表示元素右边， Y:100% 表示元素的底部。
2. circle ： 圆形，示例 -webkit-clip-path: circle(50% at 50% 50%);
要创建圆形，我们需要在圆形中输入三个值。圆心的x轴和y轴坐标，以及圆的半径。先定义圆的半径，再使用关键词at来定义圆心的x和y坐标。
3. ellipse： 椭圆， 示例  -webkit-clip-path: ellipse(30% 20% at 50% 50%);
椭圆的x轴半径和y轴半径（或形状），后面跟一个at关键字，用于分开另外一组用于定义椭圆位置的x和y坐标。
4. inset ： 圆角矩形， 示例  -webkit-clip-path: inset(25% 0 25% 0 round 0 25% 0 25%);
上面的各个值分别对应：
inset( &lt;top>&lt;right> &lt;bottom>&lt;left> round &lt;top-radius> &lt;right-radius> &lt;bottom-radius> &lt;left-radius>) 
简写：  -webkit-clip-path: inset(25% 0 round 0 25%);
