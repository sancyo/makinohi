<template>
  <div>
    <post-card-list :post-content="contentList" />
    {{ contentList }}
  </div>
</template>

<script>
import postCardList from '@/components/organisms/postCardList'

export default {
  components: {
    postCardList,
  },
  async asyncData({ $content }) {
    const contentList = await $content('blog', { deep: true })
      .only(['title', 'tag', 'data', 'dir'])
      .limit(5)
      .fetch()
    for (const i of contentList) {
      const dir = i.dir.replace('/blog/', '')
      i.dir = dir
    }
    return { contentList }
  },
}
</script>
