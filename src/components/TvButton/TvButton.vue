<script setup lang="ts">
import { onMounted, useCssModule } from 'vue'

useCssModule('button')

const props = defineProps({
  text: String,
  cssType: String, // Floating | Raised | Flat 
  cssOutline: Boolean,
  cssTextColor: String,
  cssBackgroundColor: String,
  cssBackgroundColorHover: String,
})  
const cssOutlined = (props.cssOutline ? '1px solid green' : '')
const cssTextColor = props.cssTextColor
const cssBackgroundColor = props.cssBackgroundColor
const cssBackgroundColorHover = props.cssBackgroundColorHover

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
    :cssTextColor="props.cssTextColor"
    :cssBackgroundColor="props.cssBackgroundColor"
    :cssBackgroundColorHover="props.cssBackgroundColorHover">

    {{ props.text }}
    <slot class=""></slot>
  </button>
</template>

<style module>
/* https://material.io/components/buttons#specs */
.button {
    background-color: v-bind(cssBackgroundColor);   
    color: v-bind(cssTextColor);
    display: inline-block;
    border: v-bind(cssOutlined);
    height: 36px;
    min-width: 64px;
    padding: 0px 16px 0px 16px;
}

.button:hover {
  background-color: v-bind(cssBackgroundColorHover);
}
</style>
