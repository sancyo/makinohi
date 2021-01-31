<template>
  <ul class="post-card-list">
    <li v-for="item in postContent" :key="item.id">
      <post-card
        :category="item.category"
        :title="item.title"
        :date="item.date"
        :path="item.dir"
      />
    </li>
  </ul>
</template>

<script>
import postCard from '@/components/molecules/postCard'
export default {
  components: {
    postCard,
  },
  props: {
    postContent: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.post-card-list {
  background: var(--color-bg-sub);
  padding: 5rem 7rem;
  border-radius: 10px;
  width: 70%;
  position: relative;

  /* box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08), 0 2px 2px 0 rgba(0, 0, 0, 0.1); */
}
@media screen and (max-width: 768px) {
  .post-card-list {
    width: 100%;
    margin: 0 auto;
    padding: 0.8rem 1.2rem;
  }
}
</style>
