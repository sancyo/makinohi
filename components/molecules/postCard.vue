<template>
  <div class="post-card">
    <nuxt-link :to="`/${tag}/${path}`">
      <article>
        <div class="post-info">
          <time class="post-date">{{ date }}</time>
          <span class="post-tag" :style="color">{{ tag }}</span>
          <h3 class="post-title">{{ title }}</h3>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
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
  data() {
    return {
      color: { backgroundColor: this.setTagcolor() },
    }
  },
  methods: {
    setTagcolor() {
      if (this.tag === 'dev') {
        return '#FFC825'
      } else if (this.tag === 'design') {
        return '#0786F8'
      } else {
        return '#323232'
      }
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
.post-title {
  display: block;
  font-size: 1.7rem;
  margin: 0.4rem 0;
  transition: 0.3s;
}
.post-title:hover {
  opacity: 50%;
}
.post-date {
  font-size: 1.4rem;
  color: #878787;
}
.post-tag {
  display: inline-block;
  font-size: 1.4rem;
  background: #323232;
  color: #fff;
  padding: 0.2rem 1rem;
  border-radius: 3px;
  margin: 0 0 0 1rem;
  transform: translateY(-1px);
}
</style>
