<template>
  <post-card-list :post-content="list" />
</template>

<script>
// import postContentJson from '@/content/json/content.json'
import postCardList from '@/components/organisms/postCardList'
export default {
  components: {
    postCardList,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // postContentJson,
    }
  },
  /*
  methods: {
    // 現在表示しているページに応じてJSONを整形して返すメソッド
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
*/
}
</script>
