<script setup lang="ts">
import TvLayout from './TvLayout/TvLayout.vue';
import TvAppBar from './TvAppBar/TvAppBar.vue';
</script>

<template>
  <TvLayout>
    <template v-slot:header>
      <TvAppBar />
    </template>
  </TvLayout>
</template>
