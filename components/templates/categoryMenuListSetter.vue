<template>
  <div class="category-menu-list-setter">
    <category-menu-list :category-name-list="categoryMenuList" />
  </div>
</template>

<script>
import categoryMenuList from '@/components/organisms/categoryMenuList'
export default {
  components: {
    categoryMenuList,
  },
  data() {
    return {
      categoryMenuList: ['Vue.js', 'Design', 'Others'],
    }
  },
}
</script>
