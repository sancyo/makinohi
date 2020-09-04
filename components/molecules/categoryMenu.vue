<template>
  <div class="category-menu">
    {{ categoryName }}
  </div>
</template>

<script>
export default {
  props: {
    categoryName: {
      type: String,
      default: '',
    },
  },
}
</script>
