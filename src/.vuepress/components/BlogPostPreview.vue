<template>
	<section class="blog-list__box">
		<router-link :to="item.path" class="blog-list__item">
			<h3 class="blog-post__title">{{ item.frontmatter.title }}</h3>
			<time class="blog_time">{{ formatPublishDate }}</time>
		</router-link>
    </section>
</template>

<script>
import moment from 'moment'
export default {
    name: 'BlogPostPreview',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        formatPublishDate() {
            const dateFormat = new Date(this.item.frontmatter.date)
             return moment(dateFormat).format('YYYY-MM-DD')
        }
    }
}
</script>

<style scoped>
.blog-post__button {
	margin-bottom: 1.5rem;
	display: inline-block;
}
.blog-list__item{
    display: flex;
    position: relative;
	align-content: space-between; 
	justify-content: space-between;
	align-items: center;
}
.blog-list__item:after{
	content: "";
	display: block;
	border-top: 1px dashed #6b6b6b;
	width: 100%;
	position: absolute;
	top: 0.84rem;
	z-index: 1;
}
.blog_time{
	color: #6b6b6b;
	background-color: #fff;
	position: relative;
	z-index: 2;
	padding-left: 5px
}
.blog-post__title{
	margin: 0;
	padding: 0;
	font-size: 16px;
	font-style: normal;
	font-weight: normal;
	background-color: #fff;
	padding-right: 5px;
	position: relative;
	z-index: 2;
}
.button {
	border: 1px solid #32c8cf;
	border-radius: 4px;
	color: #32c8cf;
	font-size: 0.8rem;
	padding: 0.5rem 0.75rem;
	text-transform: uppercase;
	font-weight: 700;
	box-shadow: 0 0;
	transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.tag-list {
    list-style: none;
    padding-left: 0;
    display: flex;
    margin-bottom: 25px;
}

.tag-list__item {
    margin-left: 10px;
}

.tag-list__item:first-child {
    margin-left: 0;
}

.tag-list__btn {
    padding: 5px;
    font-size: 0.9rem;
    background-color: #fff;
}
</style>
