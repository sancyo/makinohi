<template>
  <div class="post-card">
    <article>
      <div class="post-info">
        <div class="wrapper">
          <post-category :category="category" />
          <time class="post-date">{{ date }}</time>
        </div>
        <nuxt-link class="post-link" :to="`/${category}/${path}`">
          <h3 class="post-title">{{ title }}</h3>
        </nuxt-link>
      </div>
    </article>
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
  background: var(--color-bg-sub);
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
  font-weight: 600;
}

.post-title:hover {
  color: #3cb3e4;
}
.post-date {
  font-size: 1.4rem;
  color: var(--color-text-sub);
  margin: 0 1.6rem;
}
.post-link {
  display: block;
}
.wrapper {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .post-card {
    padding: 2rem 1.6rem;
  }
  .post-info {
    display: block;
  }
  .wrapper {
    margin-bottom: 0.8rem;
  }
}
</style>
