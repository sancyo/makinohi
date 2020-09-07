<template>
  <category-menu-list :category-name-list="categoryMenuList" />
</template>

<script>
import categoryMenuList from '@/components/organisms/categoryMenuList'
export default {
  components: {
    categoryMenuList,
  },
  data() {
    return {
      categoryMenuList: [
        { name: 'Vue.js', path: 'vue' },
        { name: 'Design', path: 'design' },
        { name: 'Other', path: 'other' },
      ],
    }
  },
}
</script>
