<script setup lang="ts">
import TvAppBarLink from './TvAppBarLink.vue';
import TheThemeSwitchVue from '../TheThemeSwitch.vue';

import { 
    collapsed, 
    minimal, 
    toggleTvAppBar, 
    toggleTvAppBarMinimal, 
    tvAppBarHeight, 
    tvAppBarWidth } from './state';

interface Props {
    title?: string
}

const props = withDefaults(defineProps<Props>(),{
    title: 'Travis VanDame'
})
</script>

<template>
    <div class="tv-appbar" :style="{ height: tvAppBarHeight, width: tvAppBarWidth }">
        <div class="tv-appbar-navigation">
            <span
                class="collapse-icon"
                :class="{ 'rotate-180': collapsed }">            
                <font-awesome-icon :icon="['fas', 'bars']" />
            </span>
        </div>
        <div 
            v-if="!minimal" 
            class="tv-appbar-headline">
            <h2 style="margin: 0px; padding: 0px; color: var(--vt-c-mdc-blue);">{{ props.title }}</h2>
        </div>
        <div class="tv-appbar-links">
            <TvAppBarLink to="/" icon="fas fa-home">.home()</TvAppBarLink>
            <TvAppBarLink to="/" icon="fas fa-home">.biography()</TvAppBarLink>
            <TvAppBarLink to="/" icon="fas fa-home">.projects()</TvAppBarLink>
            <TvAppBarLink to="/" icon="fas fa-home">.about()</TvAppBarLink>          
        </div>
        <div class="tv-appbar-interactive">
            <span
                class="collapse-icon"
                :class="{ 'rotate-180': collapsed }">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
            </span>
            <span
                class="collapse-icon"
                :class="{ 'rotate-180': collapsed }">            
                <font-awesome-icon :icon="['fab', 'github']" />
            </span>
            <span
                class="collapse-icon"
                :class="{ 'rotate-180': collapsed }"
                @click="toggleTvAppBar">
                <font-awesome-icon :icon="['fas', 'gear']" />            
            </span>
            <span
                class="collapse-icon"
                :class="{ 'rotate-180': collapsed }"
                @click="toggleTvAppBarMinimal">
                <font-awesome-icon :icon="['fas', 'minimize']" />            
            </span>                        
        </div>
        <div v-show="!minimal" class="tv-appbar-overflow">
            <span
                class="collapse-icon"
                :class="{ 'rotate-180': collapsed }">        
                <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />            
            </span>
        </div>
        <div class="tv-appbar-flexbox-break-item"></div>
        <Transition>
            <div
                v-if="!collapsed && !minimal" 
                class="tv-appbar-system-information">
                display
                <TheThemeSwitchVue />
            </div>
        </Transition>
    </div>
</template>

<style>
:root {
/* --tv-c-appbar-bg-color: #2f855a; */
--tv-c-appbar-bg-color: var(--vt-c-black-mute)
}
</style>

<style scoped>
.tv-appbar {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    position: fixed;
    height: 48px;
    align-items: center;
    padding-top: 16px;
    background-color: var(--tv-c-appbar-bg-color);
    box-shadow: 0 3px 2px -1px var(--vt-c-vite-yellow);
    transition: 0.3s ease;  
}

.tv-appbar-navigation {
    margin-left: 15px;
}

.tv-appbar-headline {
    margin-left: 43px;
}

.tv-appbar-links {
    margin-left: auto;
}

.tv-appbar-interactive {
    margin-left: auto;
}

.tv-appbar-overflow {
    margin-right: 24px;
}

.tv-appbar-flexbox-break-item {
    flex-basis: 100%;
    height: 0;
}

.tv-appbar-system-information {
    margin-left: auto;
    margin-right: 24px;
    transition: 0.3s ease;
}

.collapse-icon {
    /* position: absolute; */
    /* bottom: 0;*/
    padding: 0.75em;
    color: rgba(255, 255, 255, 0.7);
    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(80deg);
    transform: 0.2s linear;
}

.v-enter-active, .v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>