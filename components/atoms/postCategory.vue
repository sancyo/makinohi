<template>
  <div class="post-category" :style="color">{{ category }}</div>
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
        return '#FFC825'
      } else if (this.category === 'design') {
        return '#0786F8'
      } else {
        return '#323232'
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
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  transform: translateY(-1px);
}
</style>
