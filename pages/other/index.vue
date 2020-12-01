<template>
  <post-card-list-setter :list="content" />
</template>

<script>
import postCardListSetter from '@/components/templates/postCardListSetter'

export default {
  components: {
    postCardListSetter,
  },
  data() {
    return {
      content: [],
    }
  },
}
</script>
