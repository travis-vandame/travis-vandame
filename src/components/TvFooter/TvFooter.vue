<script setup lang="ts">
const props = withDefaults(defineProps<{
  id?: string
}>(), {
  id: 'default_footer'
})

const emit = defineEmits<{
  (event: 'change'): void
}>()
</script>

<template>
    {{ props.id }}
</template>

<style scoped></style>