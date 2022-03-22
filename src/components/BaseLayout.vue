<script setup lang="ts">
import TvLayout from './TvLayout/TvLayout.vue'
import TvAppBar from './TvAppBar/TvAppBar.vue'
import TvFooter from './TvFooter/TvFooter.vue'
import TvDrawer from './TvDrawer/TvDrawer.vue'
</script>

<template>
  <TvLayout>
    <template v-slot:header>
      <TvAppBar />
    </template>
    <template v-slot:footer>
      <TvFooter />
    </template>
    <template v-slot:aside>
      <TvDrawer />
    </template>
  </TvLayout>
</template>
