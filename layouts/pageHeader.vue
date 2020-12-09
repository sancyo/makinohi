<template>
  <div class="header-container">
    <div class="inner header-inner">
      <a href="/" class="site-logo">
        <img
          v-if="isTheme"
          class="logo-light"
          src="@/static/site-logo-light.svg"
          alt="DesignDock"
        />
      </a>
      <theme-toggle />
    </div>
  </div>
</template>

<script>
import themeToggle from '../components/atoms/themeToggle.vue'
export default {
  components: { themeToggle },
  data() {
    return {
      isTheme: true,
    }
  },
  mounted() {
    console.log(this.isTheme)
  },
}
</script>

<style scoped>
.header-container {
  background-color: var(--color-bg-sub);

  /* box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08), 0 2px 2px 0 rgba(0, 0, 0, 0.1); */
}
.header-inner {
  background-color: var(--color-bg-sub);
  height: 60px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-light {
  padding: 1.6rem 0 1.4rem 0;
  width: 160px;
  filter: var(--filter-svg);
}
</style>
