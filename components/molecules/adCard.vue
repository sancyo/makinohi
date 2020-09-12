<template>
  <div class="ad-card">
    <img src="../../static/firewood.svg" class="firewood" />
    <a href="https://github.com/sancyo" class="ad-link">
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
.firewood {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, -100%);
  width: 7rem;
}
</style>
