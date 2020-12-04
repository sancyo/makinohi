---
title: NuxtのasyncDataはpages内でしか使えない
date: 2020/12/02
category: dev
---

NuxtのasyncDataはpagesにあるvueファイル内でのみ使用可能。

## 例
### pages内→使える
```vue[pages/index.vue]
<template>
　<!-- 表示される -->
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

### pages外→使えない
```vue[components/index.vue]
<template>
  <!-- 表示されない -->
  <p>{{ srt }}</p>
</template>

<script>
// {{ str }}が表示される
export default {
  async asyncData() {
    const srt = '世界はコンニチハ！？'
    return { str }
  },
}
</script>
```

