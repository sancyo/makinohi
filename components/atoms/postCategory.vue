<template>
  <div>
    <div v-if="isArticlePage()" class="post-category" :style="color"></div>
    <div
      v-if="!isArticlePage()"
      class="post-category in-article"
      :style="color"
    >
      {{ category }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
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
      if (this.category === 'dev') {
        return '#0786F8'
      } else if (this.category === 'design') {
        return '#FFC825'
      } else {
        return '#323232'
      }
    },
    isArticlePage() {
      if (this.$route.params.article) {
        return false
      } else {
        return true
      }
    },
  },
}
</script>

<style scoped>
.post-category {
  display: inline-block;
  font-size: 1.4rem;
  background: #323232;
  color: #fff;
  border-radius: 3px;
  width: 0.9rem;
  height: 0.9rem;
  right: 7.2rem;
  text-align: center;
}

.in-article {
  width: auto;
  height: auto;
  padding: 0.3rem 0.8rem;
}
</style>
