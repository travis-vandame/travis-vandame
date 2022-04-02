<script setup lang="ts">
import { useFetch } from '../composables/fetch'

const baseUrl = 'https://api.github.com/users/travis-vandame/repos'
const { data, error } = useFetch(baseUrl)
console.log(data.value)
console.log(error.value)
</script>

<template>
  <div class="container">
    <div v-if="error">{{ error }}</div>
    <div v-else-if="data">
      Data Loaded:
      <pre>{{ data }}</pre>
    </div>
    <div v-else>Loading....</div>
  </div>
</template>
<style scoped>
@media (max-width: 800px) {
}
@media (max-width: 600px) {
}
@media (max-width: 480px) {
}
</style>
