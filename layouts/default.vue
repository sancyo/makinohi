<template>
  <div>
    <page-header />
    <div class="container default-container">
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
.category-menu-container {
  display: block;
  text-align: left;
  margin: 6rem auto;
}

.default-container {
  margin: 6rem auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
}
</style>
