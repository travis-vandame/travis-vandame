<script setup lang="ts">
import { computed, ref } from 'vue';

const isCollapsed = ref(true)
const isMinimal = ref(false)

const height = computed(() => {
    return isCollapsed.value ? '48px' : '96px'
})

const width = computed(() => {
    return isMinimal.value ? '195px' : '100%' 
})

const props = withDefaults(defineProps<{
  title?: string
}>(), {
  title: 'Travis VanDame',
})

const emit = defineEmits<{
  (event: 'change'): void
}>()

function collapse() : boolean {
    return isCollapsed.value = !isCollapsed.value
}

function minimize() : boolean {
    return isMinimal.value = !isMinimal.value
}
</script>

<template>
    <div class="tv-appbar">
        <div class="tv-appbar-navigation">
            <font-awesome-icon
                size="lg" 
                color="var(--tv-c-mdc-blue)"             
                :icon="['fa-brands', 'vuejs']" />
        </div>
        <div 
            v-if="!isMinimal" 
            class="tv-appbar-headline">

            <h6 v-text="props.title" class="tv-appbar-title"></h6>
        </div>
        <div 
            v-if="!isMinimal"
            class="tv-appbar-links">

            <slot name="links"></slot>
        </div>
        <div class="tv-appbar-icon">

            <font-awesome-icon
                :icon="['fab', 'linkedin']"
                size="lg" 
                color="var(--tv-c-mdc-blue)" />
        </div>
        <div class="tv-appbar-icon">

            <font-awesome-icon 
                :icon="['fab', 'github']" 
                size="lg" 
                color="var(--tv-c-mdc-blue)" />
        </div>
        <div class="tv-appbar-icon button-settings">

            <font-awesome-icon
                @click="collapse"
                :icon="['fas', 'gear']" 
                size="lg" 
                color="var(--tv-c-mdc-blue)" />
        </div>
        <div class="tv-appbar-icon button-minimal">

            <font-awesome-icon
                @click="minimize"
                :icon="['fas', 'minimize']"
                size="lg" 
                color="var(--tv-c-mdc-blue)" />
        </div>
        <div class="tv-appbar-flexbox-break-item"></div>
        <div
            v-if="!isCollapsed" 
            class="tv-appbar-menu">

            <slot 
                name="menu">
            </slot>
        </div>            
    </div>
</template>

<style scoped>
.tv-appbar {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: fixed;
    flex-basis: auto;
    height: v-bind(height);
    width: v-bind(width);
    align-items: center;
    background-color: var(--tv-c-black-mute);
    box-shadow: 1px 1px 3px 1px var(--tv-c-mdc-blue);
}
.tv-appbar-title {
    margin: 0px; 
    padding: 0px; 
    color: var(--tv-c-mdc-blue);    
}
.tv-appbar-navigation {
    margin: 0px 15px 0px 15px;
}
.tv-appbar-headline {
    margin-left: 24px;
}
.tv-appbar-links {
    margin-left: auto;
}
.tv-appbar-icon { 
    margin-right: 16px
}
.tv-appbar-flexbox-break-item {
    flex-basis: 100%; /* Things that make you think. TJV :P */
    height: 0px;
}
.tv-appbar-menu {
    margin-left: auto;
    margin-right: 16px;
}
@media (max-width: 800px) {
    .tv-appbar-headline {
        display: none;
    }
}
@media (max-width: 600px) {
    .tv-appbar {
        width: v-bind(width);
        height: v-bind(height);
    }
    .tv-appbar-headline {
        margin-right: 24px;
    }
    .tv-appbar-links {
        display: none;
    }
}
@media (max-width: 480px) {
    .tv-appbar {
        flex-direction: column;
        width: 55px;
        height: 225px;
        box-shadow: 1px 1px 3px 1px var(--tv-c-mdc-blue);
    }
    .tv-appbar-navigation { 
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: x-large;
    }
    .tv-appbar-headline {
        display: none;
    }
    .tv-appbar-icon {
        padding-left: 14px;
        padding-bottom: 12px;
        font-size: x-large;
     }

     .button-minimal {
         display: none;
     }
    .tv-appbar-menu {
        width: 100%;
        padding: 15px;
        background-color: var(--tv-c-black-mute);
    }
}
</style>
