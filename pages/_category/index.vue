<template>
  <post-card-list :post-content="contentList" />
</template>

<script>
import postCardList from '@/components/organisms/postCardList'

export default {
  components: {
    postCardList,
  },
  async asyncData({ $content, params }) {
    const contentList = await $content('blog', { deep: true })
      .only(['title', 'tag', 'date', 'dir'])
      .where({ tag: params.category })
      .limit(5)
      .fetch()
    for (const i of contentList) {
      const dir = i.dir.replace('/blog/', '')
      i.dir = dir
    }
    const test = await params
    return {
      contentList,
      test,
    }
  },
}
</script>
