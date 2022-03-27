<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String
})  
</script>

<template>
    <div class="card">
        <slot name="title">{{ props.title }}</slot>
        <slot name="description">{{ props.description }}</slot>
        <slot name="toolbar">Toolbar</slot>
    </div>
</template>

<style scoped>
@media (max-width: 600px) { }
@media (max-width: 480px) { }
</style>