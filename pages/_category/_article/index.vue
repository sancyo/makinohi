<template>
  <div class="content">
    <div class="content-info">
      <time class="content-date">{{ article[0].date }}</time>
      <h1 class="content-title">{{ article[0].title }}</h1>
      <post-category :category="article[0].category" />
    </div>
    <div class="content-text">
      <nuxt-content :document="article[0]" />
    </div>
  </div>
</template>

<script>
import postCategory from '@/components/atoms/postCategory'
export default {
  layout: 'content',
  components: {
    postCategory,
  },
  async asyncData({ $content, params }) {
    let article = await $content('blog', { deep: true })
      .only(['title', 'category', 'date', 'dir', 'body'])
      .fetch()
    article = article.filter((item) => item.dir.match(params.article))
    return {
      article,
    }
  },
  data() {
    return {
      headingColor: this.setHeadingcolor(),
    }
  },
  mounted() {
    const el = document.getElementsByClassName('nuxt-content')[0]
    el.dataset.category = this.$route.params.category
  },
  methods: {
    setHeadingcolor() {
      if (this.$route.params.category === 'dev') {
        return '#0786F8'
      } else if (this.$route.params.category === 'design') {
        return '#FFC825'
      } else if (this.$route.params.category === 'other') {
        return '#F7615E'
      } else {
        return '#323232'
      }
    },
  },
  head() {
    return {
      title: `${this.article[0].title} | DesignDock`,
    }
  },
}
</script>
<style>
.nuxt-content[data-category='dev'] {
  --color-category: #0786f8;
}
.nuxt-content[data-category='design'] {
  --color-category: #ffc825;
}
.nuxt-content[data-category='other'] {
  --color-category: #f7615e;
}
.content {
  background: var(--color-bg-sub);
  width: 55%;
  padding: 5rem 7rem;
  border-radius: 10px;
}
.content-date {
  font-size: 1.4rem;
}
.content-title {
  font-size: 2.4rem;
  font-weight: bold;
  margin: 0.4rem 0 1.6rem 0;
}
.content-tag {
  display: inline-block;
  font-size: 1.4rem;
  background: #323232;
  color: #fff;
  padding: 0.2rem 1rem;
  border-radius: 3px;
  transform: translateY(-1px);
}
.content-text {
  margin-top: 2.4rem;
}
.nuxt-content h2 {
  font-size: 2.2rem;
  padding: 1.4rem 0 1.4rem 1.6rem;
  position: relative;
  margin: 4rem 0 1rem 0;
}
.nuxt-content h2::after {
  position: absolute;
  content: '';
  top: 50%;
  left: 0;
  width: 5px;
  height: 80%;
  background: var(--color-category);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border-radius: 3px;
}
.nuxt-content h3 {
  font-size: 1.7rem;
  padding: 0.8rem 0 0.4rem 0;
  margin: 3.2rem 0 0 0;
}
.nuxt-content h4 {
  font-size: 1.6rem;
  margin: 2.4rem 0 0.8rem 0;
}
.nuxt-content ul {
  padding-left: 0.8rem;
  margin: 1.2rem 0 1.8rem 0;
  font-size: 1.6rem;
}
.nuxt-content li {
  list-style-type: disc;
  list-style-position: inside;
  margin: 0.6rem 0;
}
.nuxt-content pre {
  padding: 2rem;
  border-radius: 6px;
  margin: 1.2rem 0 1.6rem 0;
  line-height: 1.5;
  position: relative;
  overflow: visible;
  padding-top: 4rem;
}
.nuxt-content-highlight {
  position: relative;
}
.filename {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.6rem 2rem;
  background: #565656;
  z-index: 10;
  color: #fff;
  font-family: Menlo, Consolas, Liberation Mono, Courier, monospace;
  font-size: 1.3rem;
  display: block;
}

.nuxt-content code {
  font-family: Menlo, Consolas, Liberation Mono, Courier, monospace;
  font-size: 1.4rem;
}
.nuxt-content a {
  color: #20a8ea;
}
.nuxt-content a:hover {
  text-decoration-line: underline;
}
.nuxt-content hr {
  border-color: #fafafa;
  margin: 4rem 0;
}
.nuxt-content strong {
  display: block;
  margin-bottom: 0.8rem;
}
.nuxt-content img {
  width: 100%;
  margin-bottom: 1.8rem;
}

.nuxt-content p {
  font-size: 1.6rem;
  line-height: 1.8;
}

.nuxt-content blockquote {
  margin: 1.6rem 0;
  padding: 2rem 1.8rem;
  background: var(--color-bg-main);
  border-left: 4px solid rgb(32, 168, 234);
  border-radius: 1px 6px 6px 1px;
}

.nuxt-content p code {
  background: var(--color-code-block);
  padding: 0.2rem 0.6rem;
  color: var(--color-text-main);
  border-radius: 2px;
}
.nuxt-content blockquote h3 {
  margin: 0 0 1rem 0;
  padding: 0;
}
</style>
