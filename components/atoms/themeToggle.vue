<template>
  <div class="toggle-btn" @click="changeSiteTheme()">
    <transition name="toggle-animation-light">
      <span class="theme-toggle" :style="toggleStyle">
        <svg
          alt="暗"
          class="toggle-img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.02 19.46"
        >
          <defs>
            <style>
              .cls-1 {
                fill: #f6d860;
              }
            </style>
          </defs>
          <g id="レイヤー_2" data-name="レイヤー 2">
            <g id="レイヤー_2-2" data-name="レイヤー 2">
              <path
                class="cls-1"
                d="M20,11.75A10.14,10.14,0,1,1,6,.06a1,1,0,0,1,.54,0,1,1,0,0,1,.79,1.17,8.49,8.49,0,0,0-.25,2,8.15,8.15,0,0,0,8.14,8.1,7.87,7.87,0,0,0,3.37-.73,1,1,0,0,1,1.05.14A1,1,0,0,1,20,11.75Z"
              />
            </g>
          </g>
        </svg>
      </span>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleStaus: true,
      toggleStyle: {},
    }
  },
  mounted() {
    if (localStorage.getItem('theme') === 'light') {
      document.getElementsByTagName('html')[0].dataset.theme = 'light'
      this.toggleStaus = true
      this.toggleStyle = { left: '0' }
    } else {
      document.getElementsByTagName('html')[0].dataset.theme = 'dark'
      this.toggleStaus = false
      this.toggleStyle = { left: '100%' }
    }
  },
  methods: {
    changeSiteTheme() {
      let theme = localStorage.getItem('theme')
      if (theme === 'light') {
        theme = 'dark'
        this.toggleStaus = false
        this.toggleStyle = { left: '100%' }
      } else {
        theme = 'light'
        this.toggleStaus = true
        this.toggleStyle = { left: '0' }
      }
      if (theme === 'light') {
        document.getElementsByTagName('html')[0].dataset.theme = 'light'
      } else {
        document.getElementsByTagName('html')[0].dataset.theme = 'dark'
      }
      localStorage.setItem('theme', theme)
    },
    isToggleStatus() {
      const theme = localStorage.getItem('theme')
      if (theme === 'light') {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style>
.toggle-btn {
  display: flex;
  background: var(--color-toggle-sub);
  border: 4px solid var(--color-toggle-stroke);
  border-radius: 20px;
  width: 3.2rem;
  height: 1.8rem;
  position: relative;
}
.theme-toggle {
  position: absolute;
  display: block;
  cursor: pointer;
  background: var(--color-toggle-main);
  padding: 1rem;
  border-radius: 50%;
  transition: 0.2s ease;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.toggle-img {
  width: 1.4rem;
  fill: #f6d860 !important;
  stroke: #323232 !important;
  transform: translateY(1px);
}
</style>
