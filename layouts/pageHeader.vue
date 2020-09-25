<template>
  <div class="header-container">
    <div class="inner header-inner">
      <a href="/" class="site-logo">
        <img class="logo" src="@/static/site-logo@2x.png" alt="DesignDock" />
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header-container {
  background-color: #fff;

  /* box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08), 0 2px 2px 0 rgba(0, 0, 0, 0.1); */
}
.header-inner {
  background-color: #fff;
  height: 60px;
  max-width: 1100px;
  margin: 0 auto;
}
.logo {
  padding: 1.6rem 0 1.4rem 0;
  width: 160px;
}
</style>
