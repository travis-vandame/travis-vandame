<script setup lang="ts">
import { RouterView } from "vue-router"
import TvDrawer from "./components/TvDrawer/TvDrawer.vue"
import TvFooter from "./components/TvFooter/TvFooter.vue"
import BaseLayout from "./components/BaseLayout.vue"
import TvAppBarVue from "./components/TvAppBar/TvAppBar.vue"
</script>

<template>
  <BaseLayout>
    <template v-slot:app-bar>
      <TvAppBarVue />
    </template>
    <template v-slot:navigation-drawer>
      <TvDrawer />
    </template>
    <template v-slot:main>
      <RouterView />
    </template>
    <template v-slot:footer>
      <TvFooter />
    </template>
  </BaseLayout>
</template>

<style lang="css">
@import "@/assets/styles/index.css";
</style>
