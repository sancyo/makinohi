<template>
  <div class="ad-card">
    <a
      href="https://github.com/sancyo"
      target="_blank"
      rel="noopener noreferrer"
      class="ad-link"
    >
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
  height: 25rem;
  position: relative;
}
.ad {
  width: 50%;
}
.ad-link {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
