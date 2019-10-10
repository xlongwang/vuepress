<template>
  <div>
    <div class="code">
      <div class="code--title">
        <small>基本按钮用法</small>
      </div>
      <div class="code--demo">
        <div class="code-content">
          <div class="demo-button">
            <div class="el-row">
              <button type="button" class="el-button el-button--default">
                <!---->
                <!---->
                <span>默认按钮</span>
              </button>
              <button type="button" class="el-button el-button--primary">
                <!---->
                <!---->
                <span>主要按钮</span>
              </button>
              <button type="button" class="el-button el-button--success">
                <!---->
                <!---->
                <span>成功按钮</span>
              </button>
              <button type="button" class="el-button el-button--warning">
                <!---->
                <!---->
                <span>警告按钮</span>
              </button>
              <button type="button" class="el-button el-button--danger">
                <!---->
                <!---->
                <span>危险按钮</span>
              </button>
            </div>
          </div>
        </div>
      </div>
	<div class="meta">
			<div class="code--segment" v-show="taggle"> 
		<pre><code class="html hljs xml">
<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-row</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">plain</span>&gt;</span>朴素按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">plain</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">plain</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">plain</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">plain</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
</code></pre>
	</div>
</div>
<div class="demo-block-control" @click="doTaggle" @mouseenter="moveIn" @mouseleave="moveOut">
<i class="el-icon-caret-bottom" :class="{hovering: isHover}"></i>
<transition name="my">
		<span class="demo-block-txt" v-show="isHover">显示代码</span>
</transition>

      </div>
    </div>
  </div>
</template>

<script>
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "buttons",
  data() {
    return {
	  msg: "button",
	  isHover: false,
	  taggle: false,
	  height: 600
	}
  },
   methods: {
      moveIn(){
		  this.isHover = true
	  },
	  moveOut(){
		 this.isHover = false
	  },
	  doTaggle(){
		  this.taggle = !this.taggle
	  }
   }
};
</script>
<style lang="stylus">
   
	
</style>