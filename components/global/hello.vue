<template>
  <button @click="alert()">display</button>
</template>
<script>
export default {
  props: {
    code: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    alert() {
      window.alert(this.code)
    },
  },
}
</script>
