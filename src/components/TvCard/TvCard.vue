<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: false },
  secondary: { type: String, required: false },
  content: { type: String, required: false }
})  
</script>

<template>
    <div class="tv-card-container">
        <div class="tv-media">
            <slot name="media"></slot>
        </div>
        <div class="tv-section">
            <div class="tv-title">
                {{ props.title }}
                <slot name="title"></slot>
            </div>
            <div class="tv-title-secondary">
                {{ props.secondary }}
                <slot name="secondary"></slot>
            </div>
        </div>
        <div class="tv-section">
            <div class="tv-content">
                <slot name="content">{{ props.content }}</slot>                
            </div>
        </div>
        <div class="tv-action">
            <slot name="action">Toolbar</slot>
        </div>
    </div>
</template>

<style scoped>
.tv-card-container {
    display: flex;
    flex-direction: column;
    width: 344px;
    background-color: var(--tv-c-black-mute); 
    padding: 16px;
}
@media (max-width: 600px) { }
@media (max-width: 480px) {
    .tv-card-container {
        display: flex;
        flex-direction: column;
        width: 304px;
        background-color: var(--tv-c-black-mute); 
        padding: 16px;
    }
}
</style>