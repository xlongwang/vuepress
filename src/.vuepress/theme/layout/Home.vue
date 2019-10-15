<template>
  <div class="home">
    <div class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        alt="hero"
      >

      <h1>{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <p class="home-get-more">
          <a class="nav-link external action-button" href="/blog/">查看更多</a>
        </p>
      </p>
    </div>

    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <!-- <Content custom/> --> 
     <section class="home-page-wrapper">
      <div class="home-page-columns">
        <div 
          class="home-page-column" 
          v-for="(platform, index) in platforms" 
          :key="`${platform.title}-${index}`" 
        >
          <div class="home-page-column-head">
            {{platform.title}}
          </div>
          <div 
            class="home-page-column-card"
            v-for="(row, _index) in platform.rows"
            :key="_index"
          >
            <p><a :href="row.href">{{row.name}}</a></p>
          </div>
        </div>
      </div>
    </section>

    <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
       platforms: [
         {
          title: '开发环境',
          rows: [
            {
              name: 'Node.js',
              href: '/dev/#node-js'
            },
            {
              name: 'VSCode',
              href: '/dev/#vs-code'
            },
            {
              name: "chrome",
              href: '/dev/#chrome'
            }
          ]
        },
        {
          title: '编码规范',
          rows: [
            {
              name: 'JS规范',
              href: '/standard/#js-规范'
            },
            {
              name: 'CSS规范',
              href: '/standard/#css-规范'
            },
            {
              name: 'git规范',
              href: '/standard/#git-规范'
            },
            {
              name: '其它',
              href: '/standard/#其它规范'
            }
          ]
        },
        {
          title: '组件文档',
          rows: [
              {
                name: '基础组件',
                href: '/baseComponents/组件文档/0.基础组件/0.按钮.html'
              },
               {
                name: '视图组件',
                href: '/baseComponents/组件文档/1.视图组件/0.文字链接.html'
              },
             {
              name: '工具类组件',
              href: '/baseComponents/组件文档/2.工具类组件/0.组件.html'
			},
			{
              name: '方法类函数',
              href: '/baseComponents/组件文档/3.方法类函数/0.组件.html'
            },
          ]
        },
        {
          title: '参考手册',
          rows: [
            {
              name: 'HTML5实例',
              href: '/handbook/'
            },
            {
              name: 'Flex布局教程：实例篇',
              href: '/handbook/'
            }
          ]
        }
      ],
    }
  },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/config.styl'

.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  .home-get-more
   padding-top 2rem
  .hero
    text-align center
    padding 90px 0 80px
    border-bottom 1px solid #eaecef
    img
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)
  .home-page-columns
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
    width: 100%;
    overflow: auto;
  .home-page-column-head
    font-size: 22px;
    margin-bottom: 30px;
    line-height: 30px;
    height: 30px;
    color: #2c3e50;
    font-weight: 700;
.home-page-wrapper
  padding 35px 0 25px
@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
