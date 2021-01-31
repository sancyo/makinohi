<template>
  <nav class="category-menu-list">
    <ul>
      <li v-for="item in categoryNameList" :key="item.id">
        <category-menu :category-name="item.name" :path="item.path" />
      </li>
    </ul>
  </nav>
</template>

<script>
import categoryMenu from '@/components/molecules/categoryMenu'
export default {
  components: {
    categoryMenu,
  },
  props: {
    categoryNameList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
ul {
  display: flex;
}

.category-menu-list {
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  ul {
    justify-content: center;
  }
}
</style>
