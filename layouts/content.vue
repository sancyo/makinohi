<template>
  <div>
    <page-header />
    <Nuxt />
  </div>
</template>

<script>
import pageHeader from '@/layouts/pageHeader'
export default {
  components: {
    pageHeader,
  },
}
</script>
