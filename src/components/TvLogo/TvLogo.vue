<script setup lang="ts">
/*
interface Props {
  cssBackgroundColor?: string
  cssBoxShadow?: string
}

const props = withDefaults(defineProps<Props>(), {
  cssBackgroundColor: '',
  cssBoxShadow: ''
})
*/
</script>

<template>
  <div class="tv-app-logo">
    <div class="tv-app-l-content">
      <div class="tv-app-l-initials">
        <div class="tv-app-l-i-container">
          <span class="tv-app-t">T</span>
          <span class="tv-app-v">V</span>
        </div>
      </div>
      <div class="tv-app-l-heading">
        <div class="tv-app-l-h-title">
          <span class="tv-app-l-h-t-text-one">GitHub</span>
          <span class="tv-app-l-h-t-text-two">
            Project
            <span class="tv-app-project-view-text-used">deps</span>
          </span>
          <span class="tv-app-l-h-t-text-three">
            <u>Project Dependencies</u>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tv-app-logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.tv-app-l-content {
  display: flex;
  flex-direction: column;
}
.tv-app-l-i-container {
  text-align: center;
}
.tv-app-l-i-container .tv-app-t {
  font-size: 200px;
}
.tv-app-l-i-container .tv-app-v {
  font-size: 225px;
}
.tv-app-l-h-title {
  display: flex;
  flex-direction: column;
  font-size: 25px;
  flex-basis: 50%;
}
.tv-app-l-h-t-text-one {
  text-align: right;
  letter-spacing: 10px;
  padding-right: 42px;
}
.tv-app-l-h-t-text-two {
  text-transform: uppercase;
  font-size: 30px;
  color: var(--tv-c-anchor-green);
}
.tv-app-l-h-t-text-two span {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 14px;
}
.tv-app-l-h-t-text-three {
  letter-spacing: 2px;
  font-size: medium;
}
@media (max-width: 800px) {
  .tv-app-logo {
    align-items: center;
    width: 100%;
  }
  .tv-app-l-i-container .tv-app-t {
    font-size: 150px;
  }
  .tv-app-l-i-container .tv-app-v {
    font-size: 175px;
  }
}
@media (max-width: 610px) {
}
@media (max-width: 480px) {
  .tv-app-l-i-container {
    text-align: center;
  }
  .tv-app-l-i-container .tv-app-t {
    font-size: 100px;
  }
  .tv-app-l-i-container .tv-app-v {
    font-size: 125px;
  }
  .tv-app-l-h-title {
    display: flex;
    flex-direction: column;
    font-size: 25px;
    flex-basis: 50%;
  }
  .tv-app-l-h-t-text-one {
    text-align: right;
    letter-spacing: 10px;
  }
  .tv-app-l-h-t-text-two {
    text-transform: uppercase;
    font-size: 30px;
    color: var(--tv-c-anchor-green);
  }
  .tv-app-l-h-t-text-two span {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-size: 14px;
  }
  .tv-app-l-h-t-text-three {
    letter-spacing: 2px;
    font-size: medium;
  }
}
/* Galaxy Fold */
@media (max-width: 280px) {
}
</style>
