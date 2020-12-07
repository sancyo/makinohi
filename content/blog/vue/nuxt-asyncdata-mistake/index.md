---
title: NuxtのasyncDataはpages内でしか使えない
date: 2020/12/02
category: dev
tag: [Nuxt]
---

NuxtのasyncDataはpagesにあるvueファイル内でのみ使用可能。

## 例
### pages内→使える
```vue[pages/index.vue]
<template>
　<!-- {{ str }}が表示される -->
  <p>{{ str }}</p>
</template>

<script>
export default {
  async asyncData() {
    const srt = '世界はコンニチハ！？'
    return { str }
  },
}
</script>
```

### pages外→使えない
```vue[components/index.vue]
<template>
  <!-- {{ str }}が表示されない -->
  <p>{{ srt }}</p>
</template>

<script>
export default {
  async asyncData() {
    const srt = '世界はコンニチハ！？'
    return { str }
  },
}
</script>
```

