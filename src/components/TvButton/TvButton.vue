<script setup lang="ts">
import { computed, onMounted, useCssModule } from 'vue'
import { useRoute } from 'vue-router'

useCssModule('button')

const props = defineProps({
  text: String,
  to: String,
  cssType: String, // Floating | Raised | Flat 
  cssOutline: Boolean,
  cssTextColor: String,
  cssBackgroundColor: String,
  cssBackgroundColorHover: String,
})  
const route = useRoute()

const isType = computed(() => {
  if (props.to) {
    return 'router-link'
  } else {
    return 'button'
  }
})
const isActive = computed(() => route.path === props.to)
const cssOutlined = (props.cssOutline ? '1px solid green' : '')
const cssTextColor = props.cssTextColor
const cssBackgroundColor = isActive ? props.cssBackgroundColorHover : props.cssBackgroundColor
const cssBackgroundColorHover = props.cssBackgroundColorHover

// Lifecycle Hooks
onMounted(() => { })

// Watchers
// watch(count, (newCount, oldCount) => { })
</script>

<template>
    <component 
      :is="isType" 
      :to="props.to"
      :class="$style.button" 
      :outline="props.cssOutline" 
      :cssTextColor="props.cssTextColor"
      :cssBackgroundColor="props.cssBackgroundColor"
      :cssBackgroundColorHover="props.cssBackgroundColorHover">

      {{ props.text }}
      <slot class=""></slot>
    </component>
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
