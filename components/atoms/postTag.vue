<template>
  <div class="post-tag" :style="color">{{ tag }}</div>
</template>

<script>
export default {
  props: {
    tag: {
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
.post-tag {
  display: inline-block;
  font-size: 1.4rem;
  background: #323232;
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  transform: translateY(-1px);
  margin-left: 1rem;
}
</style>
