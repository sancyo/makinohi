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
import pageHeader from '@/layouts/pageHeader'
import adCard from '@/components/molecules/adCard'
import categoryMenuListSetter from '@/components/templates/categoryMenuListSetter'
export default {
  components: {
    pageHeader,
    adCard,
    categoryMenuListSetter,
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
