<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  text: String,
  to: String,
  cssType: String, // Floating | Raised | Flat
  cssOutline: Boolean,
  cssTextColor: String,
  cssBackgroundColor: String,
  cssBackgroundColorHover: String
})

const isType = computed(() => {
  if (props.to) {
    return 'router-link'
  } else {
    return 'button'
  }
})
</script>

<template>
  <component
    :is="isType"
    :to="props.to"
    tag="button"
    class="button"
    :outline="props.cssOutline"
    :cssTextColor="props.cssTextColor"
    :cssBackgroundColor="props.cssBackgroundColor"
    :cssBackgroundColorHover="props.cssBackgroundColorHover"
  >
    {{ props.text }}
    <slot class></slot>
  </component>
</template>

<style scoped>
.button {
  background-color: v-bind(cssBackgroundColor);
  color: v-bind('props.cssTextColor');
  display: inline-block;
  border: v-bind("props.cssOutline ? '1px solid green' : ''");
  height: 36px;
  min-width: 64px;
  padding: 0px 16px 0px 16px;
  text-transform: uppercase;
}
.button:hover {
  background-color: v-bind('props.cssBackgroundColorHover');
}
a:link,
a:visited {
  background-color: v-bind(cssBackgroundColor);
  color: v-bind('props.cssTextColor');
  border: v-bind("props.cssOutline ? '1px solid green' : ''");
  height: 36px;
  min-width: 64px;
  padding: 0px 12px 0px 12px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  text-decoration: none;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

a:hover::before {
  background-color: red;
}
@media (max-width: 600px) {
  a:link,
  a:visited {
    padding: 14px 8px 0px;
    background-color: v-bind(cssBackgroundColor);
  }
}
@media (max-width: 480px) {
  a:link,
  a:visited {
    padding: 15px 8px 0px 8px;
    background-color: v-bind(cssBackgroundColor);
  }
}
</style>
