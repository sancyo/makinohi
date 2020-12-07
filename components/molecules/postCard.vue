<template>
  <div class="post-card">
    <nuxt-link :to="`/${category}/${path}`">
      <article>
        <div class="post-info">
          <post-category :category="category" />
          <time class="post-date">{{ date }}</time>
          <h3 class="post-title">{{ title }}</h3>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
import postCategory from '@/components/atoms/postCategory'
export default {
  components: {
    postCategory,
  },
  props: {
    category: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.post-card {
  background: #fff;
  display: block;
  padding: 1rem 0.6rem;
}
.post-info {
  display: flex;
  align-items: center;
}
.post-title {
  display: block;
  font-size: 1.7rem;
  margin: 0.4rem 0;
  transition: 0.3s;
}

.post-info:hover .post-title {
  color: #3cb3e4;
}
.post-date {
  font-size: 1.4rem;
  color: #878787;
  margin: 0 1.6rem;
}
.post-info:hover .post-date {
  color: #3cb3e4;
}
</style>
