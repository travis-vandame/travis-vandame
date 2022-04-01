<script setup lang="ts">
import { useWindow } from '../../composables/window'

const version = __APP_VERSION__

// const { windowHeight, windowWidth } = useWindow()
const screenHeight = screen.height
const screenWidth = screen.width
</script>

<template>
  <div class="display-information">
    <div class="window caption">
      <span>
        Version: {{ version }}
        <!-- Window H: {{ windowHeight }} W: {{ windowWidth }} -->
      </span>
    </div>
    <div class="screen caption">
      <span>
        Resolution {{ screenHeight }} x {{ screenWidth }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.caption {
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 0.4;
}
</style>