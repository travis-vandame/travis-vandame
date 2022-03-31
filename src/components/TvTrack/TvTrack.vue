<script setup lang="ts">
interface Props {
    cssBackgroundColor?: string
    cssBoxShadow?: string
}

const props = withDefaults(defineProps<Props>(), {
    cssBackgroundColor: '',
    cssBoxShadow: ''
})
</script>

<template>
    <div class="tv-app-track">
        <div class="tv-app-t-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>
.tv-app-track {
    display: flex;
    flex-direction: row;
    width: 400px;
    height: 300px;
    background-color: v-bind(cssBackgroundColor);
    margin: 20px;
    border-radius: 10px;
}
.tv-app-t-content {
    display: flex;
    flex-direction: column;
    margin: 24px;
    flex-basis: 100%;
    max-height: max-content;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-x: hidden;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: v-bind(cssBoxShadow); 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: rgba(65,184,131,0.77);
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: rgba(87, 246, 175, 0.84);    
}
@media (max-width: 800px) { }
@media (max-width: 610px) { }
@media (max-width: 480px) {    
    .tv-app-track {
        width: 335px;
        height: 215px;
    }
}
</style>
