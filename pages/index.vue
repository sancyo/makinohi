<template>
  <div class="container">
    <post-card-list-setter />
    <div class="right">aaa</div>
  </div>
</template>

<script>
import postCardListSetter from '@/components/templates/postCardListSetter'
export default {
  components: {
    postCardListSetter,
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 1160px;
  width: 100%;
}

.right {
  display: block;
  width: 30rem;
  background: #fff;
}
</style>
