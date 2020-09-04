<template>
  <div>
    <post-card-list :post-content="postContentJson.content" />
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
}
</script>
