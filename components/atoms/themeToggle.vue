<template>
  <button class="theme-toggle" @click="changeSiteTheme()">toggle</button>
</template>

<script>
export default {
  data() {
    return {
      toggleStaus: true,
    }
  },
  mounted() {
    if ('theme_mode' in localStorage) {
    } else {
      localStorage.setItem('theme_mode', 'light')
      this.toggleStaus = localStorage.getItem('theme_mode')
    }
    if (localStorage.getItem('theme_mode') === 'light') {
      document.getElementsByTagName('html')[0].dataset.theme = 'light'
    } else {
      document.getElementsByTagName('html')[0].dataset.theme = 'dark'
    }
  },
  methods: {
    changeSiteTheme() {
      let theme = localStorage.getItem('theme_mode')
      if (theme === 'light') {
        theme = 'dark'
      } else {
        theme = 'light'
      }
      if (theme === 'light') {
        document.getElementsByTagName('html')[0].dataset.theme = 'light'
      } else {
        document.getElementsByTagName('html')[0].dataset.theme = 'dark'
      }
      localStorage.setItem('theme_mode', theme)
    },
  },
}
</script>

<style>
.theme-toggle {
  display: block;
  cursor: pointer;
  background: var(--color-bg-primary);
}
</style>
