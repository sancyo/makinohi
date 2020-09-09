<template>
  <div>
    <page-header />
    <div class="container content-container">
      <Nuxt />
      <ad-card />
    </div>
  </div>
</template>

<script>
import pageHeader from '@/layouts/pageHeader'
import adCard from '@/components/molecules/adCard'
export default {
  components: {
    pageHeader,
    adCard,
  },
}
</script>

<style scoped>
.content-container {
  margin: 6rem auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
}
</style>
