<template>
  <nuxt-link :to="`/${link}`" class="category-menu">
    <div class="img-wrapper">
      <img
        :src="require(`@/static/category-icon/icon-${path}.svg`)"
        :alt="`${path}`"
        class="category-menu-img"
      />
    </div>
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
  data() {
    return {
      link: this.setPath(),
      isDarkTheme: true,
      color: {},
    }
  },
  methods: {
    setPath() {
      if (this.path === 'home') {
        return ''
      } else {
        return this.path
      }
    },
  },
}
</script>
<style scoped>
.category-menu {
  display: block;
  margin-right: 2rem;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.img-wrapper {
  background-color: var(--color-bg-sub);
  border-radius: 10px;
}
.category-menu-img {
  width: 5rem;
  display: inline-block;
  filter: var(--filter-svg);

  /* box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08), 0 2px 2px 0 rgba(0, 0, 0, 0.1); */
  padding: 1rem;
}
.category-menu-text {
  display: block;
  text-align: center;
  margin-top: 5px;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}
@media screen and (max-width: 768px) {
  .category-menu-img {
    width: 5rem;
  }
}
</style>
