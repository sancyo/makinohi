<template>
  <post-card-list :post-content="contentList" />
</template>

<script>
import postCardList from '@/components/organisms/postCardList'

export default {
  components: {
    postCardList,
  },
  async asyncData({ $content }) {
    const contentList = await $content('blog', { deep: true })
      .only(['title', 'category', 'date', 'dir'])
      .sortBy('date', 'desc')
      .limit(10)
      .fetch()
    for (const i of contentList) {
      const dir = i.dir.replace(/\/blog\/.*\//, '')
      i.dir = dir
    }
    return { contentList }
  },
  head() {
    return {
      titleTemplate: '',
    }
  },
}
</script>
