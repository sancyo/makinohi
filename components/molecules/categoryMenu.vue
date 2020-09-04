<template>
  <nuxt-link :to="`/${path}`" class="category-menu">
    {{ categoryName }}
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
