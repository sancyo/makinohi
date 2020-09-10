<template>
  <div>
    <page-header />
    <div class="container content-container">
      <div class="home-button">
        <back-button />
      </div>
      <Nuxt />
      <ad-card />
    </div>
  </div>
</template>

<script>
import pageHeader from '@/layouts/pageHeader'
import adCard from '@/components/molecules/adCard'
import backButton from '@/components/atoms/backButton'
export default {
  components: {
    pageHeader,
    adCard,
    backButton,
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
</style>
