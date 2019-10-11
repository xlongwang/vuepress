<template>
  <div>
    <div class="code--title">
      <small>基础的文字链接用法</small>
    </div>
    <div class="demo-block demo-zh-CN demo-button">
      <div class="source">
        <div class="code--demo">
          <div class="code-content">
            <div>
              <a
                href="#"
                target="_blank"
                class="el-link el-link--default is-underline"
              >
                <!---->
                <span class="el-link--inner">默认链接</span>
                <!---->
              </a>
              <a class="el-link el-link--primary is-underline">
                <!---->
                <span class="el-link--inner">主要链接</span>
                <!---->
              </a>
              <a class="el-link el-link--success is-underline">
                <!---->
                <span class="el-link--inner">成功链接</span>
                <!---->
              </a>
              <a class="el-link el-link--warning is-underline">
                <!---->
                <span class="el-link--inner">警告链接</span>
                <!---->
              </a>
              <a class="el-link el-link--danger is-underline">
                <!---->
                <span class="el-link--inner">危险链接</span>
                <!---->
              </a>
              <a class="el-link el-link--info is-underline">
                <!---->
                <span class="el-link--inner">信息链接</span>
                <!---->
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="meta" :style="{height: codeHeight}">
        <div class="code--segment">
          <div class="highlight" style="width: 100%;">
<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://element.eleme.io"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"_blank"</span>&gt;</span>默认链接<span class="hljs-tag">&lt;/<span class="hljs-name">el-link</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-link</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>主要链接<span class="hljs-tag">&lt;/<span class="hljs-name">el-link</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-link</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span>成功链接<span class="hljs-tag">&lt;/<span class="hljs-name">el-link</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-link</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>警告链接<span class="hljs-tag">&lt;/<span class="hljs-name">el-link</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-link</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span>&gt;</span>危险链接<span class="hljs-tag">&lt;/<span class="hljs-name">el-link</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">el-link</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>&gt;</span>信息链接<span class="hljs-tag">&lt;/<span class="hljs-name">el-link</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	</code></pre>
          </div>
        </div>
      </div>
      <div class="demo-block-control" @click="doTaggle" @mouseenter="moveIn" @mouseleave="moveOut">
        <i class="el-icon-caret-bottom" :class="{hovering: isHover}"></i>
        <transition name="my">
          <span class="demo-block-txt" v-show="isHover">显示代码</span>
          <span class="demo-block-txt" v-show="!isHover">隐藏代码</span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "textLink",
  data() {
    return {
      msg: "button",
      isHover: false,
      taggle: false,
      codeHeight: 0
    };
  },
  methods: {
    moveIn() {
      this.isHover = true;
    },
    moveOut() {
      this.isHover = false;
    },
    doTaggle() {
      this.taggle = !this.taggle;
      if (this.taggle) {
        this.codeHeight = "205px";
      } else {
        this.codeHeight = "0px";
      }
    }
  }
};
</script>
<style lang="stylus"></style>