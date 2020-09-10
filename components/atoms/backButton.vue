<template>
  <div class="home-button-link" onclick="window.history.back()">
    <img src="@/static/arrow-left.svg" alt="O" class="home-button-img" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home-button-link {
  display: inline-block;
  padding: 1.2rem;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}
.home-button-link:hover {
  cursor: pointer;
}
.home-button-img {
  width: 2rem;
}
</style>
