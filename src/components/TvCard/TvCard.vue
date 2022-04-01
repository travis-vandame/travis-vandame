<script setup lang="ts">
interface Props {
    title?: string
    secondary?: string
    content?: string
    cssBackgroundColor?: string
    cssBackgroundColorCard?: string
    cssBoxShadow?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    secondary: '',
    content: '',
    cssBackgroundColor: '',
    cssBackgroundColorCard: '',
    cssBoxShadow: ''
})  
</script>

<template>
    <div class="tv-app-card">
        <div class="tv-app-c-container">
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
    </div>
</template>

<style scoped>
.tv-app-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: v-bind(cssBackgroundColor);
}
.tv-app-c-container {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: v-bind(cssBackgroundColorCard);
    transition: 0.3s; 
    margin:20px;
}
.tv-title-secondary {
    margin-bottom: 18px;
}
.tv-action {
    margin-top: 18px;
}
@media (max-width: 600px) { }
@media (max-width: 480px) { 
    .tv-app-card {
        background-color: v-bind(cssBackgroundColor);
    }
}
</style>