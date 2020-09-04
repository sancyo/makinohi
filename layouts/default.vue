<template>
  <div>
    <page-header />
    <div class="container category-menu-container">
      <category-menu-list-setter />
    </div>
    <div class="container default-container">
      <div><Nuxt /></div>
    </div>
  </div>
</template>
<script>
import categoryMenuListSetter from '@/components/templates/categoryMenuListSetter'
import pageHeader from '@/layouts/pageHeader'
export default {
  components: {
    pageHeader,
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
</style>
