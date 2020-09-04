<template>
  <div>
    <nuxt-link :to="`/${tag}/${path}`">
      <article>
        <div class="post-info">
          <h3>{{ title }}</h3>
          <time>{{ date }}</time>
          <span>{{ tag }}</span>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
  },
}
</script>
