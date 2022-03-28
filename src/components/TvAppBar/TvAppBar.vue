<script setup lang="ts">
import { computed, ref } from 'vue';
import TvLink from '../TvLink/TvLink.vue';

const isCollapsed = ref(true)
const isMinimal = ref(false)

const height = computed(() => {
    return isCollapsed.value ? '48px' : '96px'
})

const width = computed(() => {
    return isMinimal.value ? '205px' : '100%' 
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
    <div class="tv-app-bar">
        <div class="tv-app-bar-navigation">
            <tv-link to="http://travis-vandame/github.io">
                <font-awesome-icon
                    size="lg" 
                    color="var(--tv-c-anchor-green)"             
                    :icon="['fa-brands', 'vuejs']" />
            </tv-link>
        </div>
        <div 
            v-if="!isMinimal" 
            class="tv-app-bar-headline">

            <h6 v-text="props.title" class="tv-app-bar-title"></h6>
        </div>
        <div 
            v-if="!isMinimal"
            class="tv-app-bar-links">

            <slot name="links"></slot>
        </div>
        <div class="tv-app-bar-icon">
            
            <TvLink to="http://www.linkedin.com/in/tvandame">
                <font-awesome-icon
                    :icon="['fab', 'linkedin']"
                    size="lg" 
                    color="var(--tv-c-white-mute)" />
            </TvLink>                
        </div>
        <div class="tv-app-bar-icon">
            <tv-link to="http://github.com/travis-vandame">
                <font-awesome-icon 
                    :icon="['fab', 'github']" 
                    size="lg" 
                    color="var(--tv-c-white-mute)" />
            </tv-link>
        </div>
        <div class="tv-app-bar-icon button-settings">

            <font-awesome-icon
                @click="collapse"
                :icon="['fas', 'gear']" 
                size="lg" 
                color="var(--tv-c-white-mute)" />
        </div>
        <div class="tv-app-bar-icon button-minimal">

            <font-awesome-icon
                @click="minimize"
                :icon="['fas', 'minimize']"
                size="lg" 
                color="var(--tv-c-white-mute)" />
        </div>
        <div class="tv-app-bar-flexbox-break-item"></div>
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
.tv-app-bar {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: fixed;
    flex-basis: auto;
    height: v-bind(height);
    width: v-bind(width);
    align-items: center;
    background-color: var(--tv-c-black-mute);
    box-shadow: 1px 1px 3px 1px var(--tv-c-anchor-green);
}
.tv-app-bar-title {
    margin: 0px; 
    padding: 0px; 
    color: var(--tv-c-white-mute);    
}
.tv-app-bar-navigation {
    margin: 0px 15px 0px 15px;
    font-size: x-large;
}
.tv-app-bar-headline {
    margin-left: 24px;
}
.tv-app-bar-links {
    margin-left: auto;
}
.tv-app-bar-icon { 
    margin-right: 15px;
    font-size: large;
}
.tv-app-bar-flexbox-break-item {
    flex-basis: 100%; /* Things that make you think. TJV :P */
    height: 0px;
}
.tv-app-bar-menu {
    margin-left: auto;
    margin-right: 16px;
}
@media (max-width: 800px) {
    .tv-app-bar-headline {
        display: none;
    }
}
@media (max-width: 600px) {
    .tv-app-bar {
        width: v-bind(width);
        height: v-bind(height);
    }
    .tv-app-bar-headline {
        margin-right: 24px;
    }
    .tv-app-bar-links {
        display: none;
    }
}
@media (max-width: 480px) {
    .tv-app-bar {
        flex-direction: column;
        width: 55px;
        height: 225px;
        box-shadow: 1px 1px 3px 1px var(--tv-c-anchor-green);
    }
    .tv-app-bar-navigation {
        padding-top: 15px;
        font-size: x-large;
    }
    .tv-app-bar-headline {
        display: none;
    }
    .tv-app-bar-icon {
        padding-top: 15px;
        padding-left: 15px;
        font-size: x-large;
     }
     .button-minimal {
         display: none;
     }
    .tv-app-bar-menu {
        width: 100%;
        padding: 15px;
        background-color: var(--tv-c-black-mute);
    }
}
</style>
