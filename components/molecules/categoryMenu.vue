<template>
  <nuxt-link :to="`/${path}`" class="category-menu">
    <img
      :src="require(`@/static/category-icon/icon-${path}.png`)"
      :alt="`${path}`"
      class="category-menu-img"
    />
    <span class="category-menu-text">{{ categoryName }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    categoryName: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
.category-menu {
  display: block;
  margin-right: 2rem;
}
.category-menu-img {
  width: 4rem;
  display: inline-block;
  background-color: #fff;

  /* box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08), 0 2px 2px 0 rgba(0, 0, 0, 0.1); */
  padding: 1rem;
  border-radius: 10px;
}
.category-menu-text {
  display: block;
  text-align: center;
  margin-top: 5px;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}
</style>
