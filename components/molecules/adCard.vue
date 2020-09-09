<template>
  <div class="ad-card">
    <a href="https://github.com/sancyo">
      <img src="@/static/git-hub-logo.svg" alt="GitHub" class="ad" />
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.ad-card {
  width: 30rem;
  background: #fff;
  border-radius: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  position: fixed;
  right: calc((100vw - 1160px) / 2);
  height: 25rem;
}
.ad {
  width: 50%;
}
</style>
