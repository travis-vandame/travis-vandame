<script setup lang="ts">
const props = withDefaults(defineProps<{
  id?: string
}>(), {
  id: 'default'
})

const emit = defineEmits<{
  (event: 'change'): void
}>()
</script>

<template>
    <div class="tv-app-wrapper">
        <header class="tv-app-header">
            <!-- @slot Site header -->
            <slot name="header"></slot>
        </header>
        <article class="tv-app-article">
            <slot name="article"></slot>
        </article>
        <aside class="tv-app-aside">
            <!-- @slot Site drawer -->
            <slot name="aside"></slot>
        </aside>
        <div class="tv-app-advertising">[advertising]</div>
        <div class="tv-app-footer">
            <!-- @slot Site footer -->
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style scoped>
.tv-app-wrapper {
    min-height: 100vh;
    display: grid;
    gap: 24px;
    grid-template-areas: 
        "header"
        "aside"        
        "article"
        "advertising"
        "footer";
}
.tv-app-header {
    grid-area: header;
}
.tv-app-article {
    grid-area: article;
}
.tv-app-aside {
    grid-area: aside;
}
.tv-app-advertising {
    grid-area: advertising;
}
.tv-app-footer {
    grid-area: footer;
}
@media (min-width: 480px) {
    .tv-app-wrapper {
        grid-template-columns: 1fr 3fr;
        grid-template-areas: 
            "header" "header"
            "nav"  "nav"
            "sidebar" "article"
            "advertising" "footer";
        gap: 16px;
    }
}
@media (min-width: 600px) {
    .tv-app-wrapper {
        grid-template-columns: 1fr 6fr 1fr;
        grid-template-areas: 
            "header header header"
            "aside article advertising"
            "aside article advertising"
            "footer footer footer";
        gap: 24px;
    }
}
</style>
