<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { RouterLink } from 'vue-router';

const props = defineProps({
    //@ts-ignore
    ...RouterLink.props,
    inactiveClass: String
})  

const isExternalLink = computed(() => { 
    return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
    <a v-if="isExternalLink" :href="props.to"><slot></slot></a>
    <router-link v-else v-bind="props">
        <slot></slot>
    </router-link>    
</template>

<style scoped></style>
