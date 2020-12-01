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
      content: [
        {
          title: 'チートシート【Cloud Firestore編】',
          date: '2020/10/08',
          tag: 'dev',
          path: 'cloud-firestore-cheetsheet',
        },
      ],
    }
  },
}
</script>
