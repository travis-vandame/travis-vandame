<script setup lang="ts">
import { ref } from 'vue'
import { useWindow } from '../../composables/window'
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

const { windowHeight, windowWidth } = useWindow()

interface Props {
    title?: string
}

const props = withDefaults(defineProps<Props>(),{
    title: 'Travis VanDame'
})

const showModal = ref(false)
</script>

<template>
    <div class="tv-appbar">

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
            <!--
            <TvButton @click="showModal = true">Bug Report</TvButton>
            <TheThemeSwitch />
            -->
        </div>
        <div class="tv-appbar-links">
            <!--
            <TvAppBarLink to="/" icon="fas fa-home">.home()</TvAppBarLink>
            <TvAppBarLink to="/" icon="fas fa-home">.biography()</TvAppBarLink>
            <TvAppBarLink to="/" icon="fas fa-home">.projects()</TvAppBarLink>
            <TvAppBarLink to="/" icon="fas fa-home">.about()</TvAppBarLink>          
            -->
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
        <div class="tv-appbar-overflow">

        </div>
        <div class="tv-appbar-flexbox-break-item"></div>
        <Transition>
            <div
                v-if="!collapsed" 
                class="tv-appbar-system-information">

                <TvSwitch
                    id="travis"
                    labelTextDisabled="Day Mode" 
                    labelTextEnabled="Night Mode"
                    :showLabel="false"
                    :disabled="false" />
                                    
                W: {{ windowWidth }} H: {{ windowHeight }} 
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
    flex-wrap: wrap;
    position: fixed;
    height: v-bind(tvAppBarHeight);
    width: v-bind(tvAppBarWidth);
    align-items: center;
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
.tv-appbar-interactive { }
.tv-appbar-overflow {
    margin-right: 24px;
}
.tv-appbar-flexbox-break-item {
    flex-basis: 100%;
    height: 0px;
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

@media (max-width: 480px) {
    .tv-appbar {
        flex-direction: column;
        justify-content: flex-end;
        width: v-bind(tvAppBarWidth);
        height: v-bind(tvAppBarHeight);
        height: auto;
    }
    .tv-appbar-title, h2 {
        font-size: medium;
    }
    .tv-appbar-navigation {
        display: none;
    }
    .tv-appbar-headline {
        display: none;
    }
    .tv-appbar-links { }
    .tv-appbar-interactive {
        order: -1;
    }
    .tv-appbar-interactive, span, font-awesome-icon {
        font-size: xx-large;
    }
    .tv-appbar-overflow {
        margin-left: auto;
    }
    .tv-appbar-flexbox-break-item { }

    .tv-appbar-system-information { }
}
</style>
