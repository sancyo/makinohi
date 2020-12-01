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
          title: '新しくブログを制作した。',
          date: '2020/09/13',
          tag: 'design',
          path: 'about_site',
        },
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
