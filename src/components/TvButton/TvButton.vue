<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  type: String, // Floating | Raised | Flat
  outlined: Boolean,
  background: String,
  hover: String,
  text: String
})  

const cssOutlined = (props.outlined ? '1px solid green' : '')
const cssBackgroundColor = props.background
const cssHover = props.hover

const emit = defineEmits(['response'])

// Lifecycle Hooks
onMounted(() => { })

// Watchers
// watch(count, (newCount, oldCount) => { })
</script>

<template>
  <button 
    class="button" 
    :outlined="props.outlined" 
    :text="props.text"
    :background="props.background"
    :hover="props.hover">

    {{ props.text }}
    <slot></slot>
  </button>
</template>

<style scoped>
/* https://material.io/components/buttons#specs */
.button {
    background-color: v-bind(cssBackgroundColor);
    color: var(--vt-c-green);
    display: inline-block;
    border: v-bind(cssOutlined);
    height: 36px;
    min-width: 64px;
    padding: 0px 16px 0px 16px;
}

.button:hover {
  background-color: v-bind(cssHover);
}
</style>
