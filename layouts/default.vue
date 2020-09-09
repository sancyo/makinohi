<template>
  <div>
    <page-header />
    <div class="container category-menu-container">
      <category-menu-list-setter />
    </div>
    <div class="container default-container">
      <Nuxt />
      <ad-card />
    </div>
  </div>
</template>
<script>
import categoryMenuListSetter from '@/components/templates/categoryMenuListSetter'
import pageHeader from '@/layouts/pageHeader'
import adCard from '@/components/molecules/adCard'
export default {
  components: {
    pageHeader,
    categoryMenuListSetter,
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
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 1160px;
  width: 100%;
  position: relative;
}
</style>
