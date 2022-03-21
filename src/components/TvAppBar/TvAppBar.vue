<script setup lang="ts">
import { ref } from 'vue'
import TvButton from '../TvButton/TvButton.vue';
import TvSwitch from '../TvSwitch/TvSwitch.vue';
import TvAppBarLink from './TvAppBarLink.vue'
import TvModal from '../TvModal/TvModal.vue'
import TheThemeSwitch from '../TheThemeSwitch.vue'
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

const showModal = ref(false)
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
            <h2 v-text="props.title" class="tv-appbar-title"></h2>
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

                <TvSwitch
                    id="travis"
                    labelTextDisabled="Disabled" 
                    labelTextEnabled="Enabled"                    
                    :disabled="false" />

                <TheThemeSwitch />
                
                <TvButton @click="showModal = true">Bug Report</TvButton>
            </div>
        </Transition>
    </div>
    
    <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <TvModal :isActive="showModal" @close="showModal = false">
            <template #header>
                Bug Reporting System
            </template>
            <template #body>
                [ Bug Report Form ]
            </template>
            <template #footer>
                [ footer ]
            </template>
        </TvModal>
    </Teleport>    
</template>

<style>
:root {
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

.tv-appbar-title {
    margin: 0px; 
    padding: 0px; 
    color: var(--vt-c-mdc-blue);    
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