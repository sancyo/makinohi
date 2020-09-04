<template>
  <nav class="category-menu-list">
    <ul v-for="item in categoryNameList" :key="item.id">
      <li>
        <category-menu :category-name="item" />
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
