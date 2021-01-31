<template>
  <div>
    <page-header />
    <div class="container content-container">
      <div class="home-button">
        <page-back-button />
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import pageHeader from '@/layouts/pageHeader'
import pageBackButton from '@/components/atoms/pageBackButton'
export default {
  components: {
    pageHeader,
    pageBackButton,
  },
}
</script>

<style scoped>
.content-container {
  margin: 6rem auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
}
.home-button {
  position: fixed;
  left: calc(((100vw - 1100px) / 2));
  transform: translateX(calc(-100% - 3rem));
}
@media screen and (max-width: 768px) {
  .container {
    display: block;
    padding: 0;
    margin: 0 auto;
  }
}
</style>
