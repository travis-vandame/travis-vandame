<script setup lang="ts">
import { onMounted, useCssModule } from 'vue'

useCssModule('button')

const props = defineProps({
  text: String,
  cssType: String, // Floating | Raised | Flat 
  cssOutline: Boolean,
  cssBackgroundColor: String,
  cssHoverColor: String,
})  
const theme = {
  backgroundColor: props.cssHoverColor,
  hoverColor: props.cssHoverColor
}
const cssOutlined = (props.cssOutline ? '1px solid green' : '')
const cssBackgroundColor = props.cssBackgroundColor
const cssHoverColor = props.cssHoverColor

const emit = defineEmits(['response'])

// Lifecycle Hooks
onMounted(() => { })

// Watchers
// watch(count, (newCount, oldCount) => { })
</script>

<template>
  <button 
    :class="$style.button" 
    :outline="props.cssOutline" 
    :text="props.text"
    :backgroundColor="props.cssBackgroundColor"
    :hoverColor="props.cssHoverColor">

    {{ props.text }}
    <slot></slot>
  </button>
</template>

<style module>
/* https://material.io/components/buttons#specs */
.button {
    position: absolute;
    background-color: v-bind(cssBackgroundColor);
    color: var(--vt-c-green);
    display: inline-block;
    border: v-bind(cssOutlined);
    height: 36px;
    min-width: 64px;
    padding: 0px 16px 0px 16px;
}

.button:hover {
  background-color: v-bind(cssHoverColor);
}
</style>
