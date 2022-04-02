<script setup lang="ts">
import { onMounted } from 'vue'

let userTheme = ''

onMounted(() => {
  const initUserTheme = getMediaPreference()

  setTheme(initUserTheme)
})

function toggleTheme() {
  const activeTheme = localStorage.getItem('user-theme')

  if (activeTheme === 'light-theme') {
    setTheme('dark-theme')
  } else {
    setTheme('light-theme')
  }
}

function setTheme(theme: string) {
  localStorage.setItem('user-theme', theme)

  userTheme = theme

  switch (theme) {
    case 'dark-theme':
      document.documentElement.style.setProperty(
        '--color-background',
        'var(--tv-c-black)'
      )
      document.documentElement.style.setProperty(
        '--color-background-soft',
        'var(--tv-c-black-soft)'
      )
      document.documentElement.style.setProperty(
        '--color-background-mute',
        'var(--tv-c-black-mute)'
      )

      document.documentElement.style.setProperty(
        '--color-border',
        'var(--tv-c-divider-dark-2)'
      )
      document.documentElement.style.setProperty(
        '--color-border-hover',
        'var(--tv-c-divider-dark-1)'
      )

      document.documentElement.style.setProperty(
        '--color-heading',
        'var(--tv-c-text-dark-1)'
      )
      document.documentElement.style.setProperty(
        '--color-text',
        'var(--tv-c-text-dark-2)'
      )

      break
    case 'light-theme':
      document.documentElement.style.setProperty(
        '--color-background',
        'var(--tv-c-white)'
      )
      document.documentElement.style.setProperty(
        '--color-background-soft',
        'var(--tv-c-white-soft)'
      )
      document.documentElement.style.setProperty(
        '--color-background-mute',
        'var(--tv-c-white-mute)'
      )

      document.documentElement.style.setProperty(
        '--color-border',
        'var(--tv-c-divider-light-2)'
      )
      document.documentElement.style.setProperty(
        '--color-border-hover',
        'var(--tv-c-divider-light-1)'
      )

      document.documentElement.style.setProperty(
        '--color-heading',
        'var(--tv-c-text-light-1)'
      )
      document.documentElement.style.setProperty(
        '--color-text',
        'var(--tv-c-text-light-1)'
      )

      break
  }
}

function getMediaPreference() {
  const hasDarkPreference = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  if (hasDarkPreference) {
    return 'dark-theme'
  } else {
    return 'light-theme'
  }
}
</script>

<template>
  <label class="switch">
    <input @change="toggleTheme" type="checkbox" />
    <span class="slider round"></span>
  </label>
</template>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 19px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 11px;
  width: 11px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 14px;
}

.slider.round:before {
  border-radius: 40%;
}
</style>
