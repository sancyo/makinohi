<template>
  <div class="content">
    <div class="content-info">
      <time class="content-date">2020/08/28</time>
      <span class="content-tag">vue</span>
      <h1 class="content-title">Nuxt.jsで作る静的サイトジェネレーター</h1>
    </div>
    <div class="content-text">
      <h2>about site !</h2>
      <p>Vue.js で作成した個人ブログ</p>
      <h2>使い方</h2>
      <p>アウトプット目的で使います</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'content',
}
</script>

<style scoped>
.content {
  background: #fff;
  width: 55%;
  padding: 5rem 7rem;
}
.content-date {
  font-size: 1.4rem;
}
.content-title {
  font-size: 2.4rem;
  font-weight: 600;
  margin: 0.8rem 0;
}
.content-tag {
  display: inline-block;
  font-size: 1.4rem;
  background: #323232;
  color: #fff;
  padding: 0.2rem 1rem;
  border-radius: 3px;
  margin: 0 0 0 1rem;
  transform: translateY(-1px);
}
.content-text {
  margin-top: 2.4rem;
}

.content-text h2 {
  font-size: 2.2rem;
  margin: 5rem 0 1.2rem;
}

.content-text p {
  font-size: 1.6rem;
}
</style>
