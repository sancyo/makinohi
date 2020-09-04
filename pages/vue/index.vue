<template>
  <div class="container">
    <category-menu-list-setter />
    <post-card-list-setter />
  </div>
</template>

<script>
import postCardListSetter from '@/components/templates/postCardListSetter'
import categoryMenuListSetter from '@/components/templates/categoryMenuListSetter'
export default {
  components: {
    postCardListSetter,
    categoryMenuListSetter,
  },
}
</script>
