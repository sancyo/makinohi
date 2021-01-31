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
@media screen and (max-width: 768px) {
  .container {
    display: block;
    padding: 0 2.8rem;
    margin: 0 auto;
  }
  .category-menu-container {
    margin: 3.6rem auto 3.2rem 0;
    padding: 0 2.8rem;
  }
}
</style>
