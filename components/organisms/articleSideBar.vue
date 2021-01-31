<template>
  <div class="article-side-bar">
    <p class="toc-title">目次</p>
    <scrollactive active-class="active">
      <ul class="toc-list">
        <li
          v-for="(item, index) in articleToc"
          :key="index"
          class="toc-list-item"
        >
          <a
            :href="`#${item.id}`"
            :class="{
              toc2: item.depth === 2,
              toc3: item.depth === 3,
            }"
            class="scrollactive-item"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </scrollactive>
  </div>
</template>

<script>
export default {
  props: {
    articleToc: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    const el = document.getElementsByClassName('article-side-bar')[0]
    el.dataset.category = this.$route.params.category
  },
}
</script>

<style scoped>
.article-side-bar[data-category='dev'] {
  --color-category: #0786f8;
}
.article-side-bar[data-category='design'] {
  --color-category: #ffc825;
}
.article-side-bar[data-category='other'] {
  --color-category: #f7615e;
}
.article-side-bar {
  background: var(--color-bg-sub);
  width: 30rem;
  position: fixed;
  transform: translateX(-30rem);
  border-radius: 10px;
  padding: 2rem;
  box-sizing: border-box;
}
.toc-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.6rem;
  opacity: 0.5;
}
.toc-list {
  position: relative;
  padding-left: 2rem;
}

.toc-list::before {
  content: '';
  position: absolute;
  width: 2px;
  height: calc(100% - 25px);
  top: 10px;
  left: 7px;
  background: var(--color-text-sub);
}

.toc-list-item {
  margin: 0.8rem 0;
  position: relative;
}
.scrollactive-item {
  transition: 0.2s;
}
.scrollactive-item:hover {
  color: var(--color-category);
}
.toc2 {
  position: relative;
  display: block;
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  padding: 0.3rem 0;
}

.toc2::before {
  content: '';
  position: absolute;
  top: 6px;
  left: -18px;
  width: 12px;
  height: 12px;
  background: var(--color-text-sub);
  border-radius: 50%;
  border: 3px solid var(--color-bg-sub);
}

.toc3 {
  font-size: 1.5rem;
  position: relative;
  padding-left: 1.2rem;
}
.active {
  color: var(--color-category);
}
.active::before {
  background: var(--color-category);
}
@media screen and (max-width: 768px) {
  .article-side-bar {
    display: none;
  }
}
</style>
