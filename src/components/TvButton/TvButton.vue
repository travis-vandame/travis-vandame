<script setup lang="ts">
const props = withDefaults(defineProps<{
  id?: string
}>(), {
  id: 'TvButton'
})

const emit = defineEmits<{
  (event: 'change'): void
}>()
</script>

<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    outline: none;
    border-style: solid;   
}
</style>