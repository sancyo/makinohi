<template>
  <div>
    <post-card-list :post-content="sortPostContentJson()" />
  </div>
</template>

<script>
import postContentJson from '@/content/json/content.json'
import postCardList from '@/components/organisms/postCardList'
export default {
  components: {
    postCardList,
  },
  data() {
    return {
      postContentJson,
    }
  },
  methods: {
    sortPostContentJson() {
      const routePath = this.$route.path
      if (routePath === '/') {
        return postContentJson.content
      } else {
        return postContentJson.content.filter(
          (items) => items.tag === routePath.replace('/', '')
        )
      }
    },
  },
}
</script>
