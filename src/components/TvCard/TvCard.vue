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
                <h6 style="padding: 0px; margin: 0px; text-transform: uppercase;">
                    <slot name="icon"></slot>{{ props.title }}
                </h6>
                <slot name="title"></slot>
            </div>
            <div class="tv-title-secondary">
                <span class="caption">{{ props.secondary }}</span>
                <slot name="secondary"></slot>
            </div>
        </div>
        <div class="tv-section">
            <div class="tv-content">
                <span class="body1">{{ props.content }}</span>
                <slot name="content">{{ props.content }}</slot>                
            </div>
        </div>
        <div class="tv-action">
            <slot name="action"></slot>
        </div>
    </div>
</template>

<style scoped>
.tv-card-container {
    display: flex;
    flex-direction: column;
    width: 344px;
    padding: 16px;
    border-radius: 10px;
    background-color: var(--primary-color-light);
    transition: 0.3s;    
}
.tv-title-secondary {
    margin-bottom: 18px;
}

.tv-action {
    margin-top: 18px;
}
@media (max-width: 600px) { }
@media (max-width: 480px) {
    .tv-card-container {
        display: flex;
        flex-direction: column;
        width: 304px;
    }
}
</style>