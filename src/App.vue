<script setup lang="ts">
import { RouterView } from "vue-router";
import TheToolBar from "./components/TheToolBar.vue";
import TheNavigationDrawer from "./components/TheNavigationDrawer.vue";
import TheFooter from "./components/TheFooter.vue";
import BaseLayout from "./components/BaseLayout.vue";
import TvAppBarVue from "./components/TvAppBar/TvAppBar.vue";
</script>

<template>
  <BaseLayout>
    <template v-slot:app-bar>
      <!-- <TheToolBar /> -->
      <TvAppBarVue />
    </template>
    <template v-slot:navigation-drawer>
      <TheNavigationDrawer />
    </template>
    <template v-slot:main>
      <RouterView />
    </template>
    <template v-slot:footer>
      <TheFooter />
    </template>
  </BaseLayout>
</template>

<style>
@import "@/assets/styles/index.css";
</style>
