<template>
  <ul class="post-card-list">
    <li v-for="item in postContent" :key="item.id">
      <post-card
        :tag="item.tag"
        :title="item.title"
        :date="item.date"
        :path="item.path"
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
      type: Object,
      default: () => {},
    },
  },
}
</script>
