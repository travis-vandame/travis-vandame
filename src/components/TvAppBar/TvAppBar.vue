<script setup lang="ts">
import { ref } from 'vue'
import { useWindow } from '../../composables/window'
import TvButton from '../TvButton/TvButton.vue';
import TvSwitch from '../TvSwitch/TvSwitch.vue';
import TvModal from '../TvModal/TvModal.vue'
import TheThemeSwitch from '../TheThemeSwitch.vue'
import { 
    collapsed, 
    minimal, 
    toggleTvAppBar, 
    toggleTvAppBarMinimal, 
    tvAppBarHeight, 
    tvAppBarWidth } from './state';

const props = withDefaults(defineProps<{
  id?: string
  title?: string
  isActive?: boolean
  disabled?: boolean
  defaultState: boolean
  labelTextEnabled: string
  labelTextDisabled: string
}>(), {
  id: 'default',
  title: 'T-App Development',
  disabled: false,
  isActive: false,
  showLabel: true,
  defaultState: false,
  labelTextDisabled: 'Off',
  labelTextEnabled: 'On'
})

// TODO: On click event is trying to change a read only prop needs fixed. Doing some type script refactoring
// and broke it.

const emit = defineEmits<{
  (event: 'change'): void
}>()

const { windowHeight, windowWidth } = useWindow()
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
            <span v-text="props.title" class="tv-appbar-title"></span>
            <!--
            <TvButton @click="showModal = true">Bug Report</TvButton>
            <TheThemeSwitch />
            -->
        </div>
        <div 
            v-if="!minimal"
            class="tv-appbar-links">
            <tv-button 
                text="Home"
                :cssOutline="false"
                cssTextColor="var(--tv-c-anchor-green)"
                cssBackgroundColor=""
                cssBackgroundColorHover="var(--color-background-soft)">
            </tv-button>
            <tv-button 
                text="Project"
                :cssOutline="false"
                cssTextColor="var(--tv-c-anchor-green)"
                cssBackgroundColor=""
                cssBackgroundColorHover="var(--color-background-soft)">
            </tv-button>
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
                v-show="!collapsed" 
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

<style scoped>
.tv-appbar {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: fixed;
    flex-basis: auto;
    height: v-bind(tvAppBarHeight);
    width: v-bind(tvAppBarWidth);
    align-items: center;
    background-color: var(--tv-c-black-mute);
    box-shadow: 0 3px 2px -1px var(--tv-c-vite-yellow);
    transition: 0.3s ease;  
}
.tv-appbar-title {
    margin: 0px; 
    padding: 0px; 
    color: var(--tv-c-mdc-blue);    
}
.tv-appbar-navigation {
    margin-left: 15px;
}
.tv-appbar-headline {
    margin-left: 24px;
}
.tv-appbar-links {
    margin-left: auto;
}
.tv-appbar-interactive { 

}
.tv-appbar-overflow {
    margin-right: 24px;
}
.tv-appbar-flexbox-break-item {
    flex-basis: 100%; /* Things that make you think. TJV :P */
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
        flex-basis: auto;
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
    .tv-appbar-links { 

    }
    .tv-appbar-interactive {
        order: -1;
    }
    .tv-appbar-interactive, span, font-awesome-icon {
        margin-right:auto;
        font-size: xx-large;
    }
    .tv-appbar-overflow {
        margin-left: auto;
    }
    .tv-appbar-flexbox-break-item { }

    .tv-appbar-system-information { 
        padding: 0px;
        margin: 0px;

    }
}
@media (max-width: 600px) {
    .tv-appbar {
        width: v-bind(tvAppBarWidth);
        height: v-bind(tvAppBarHeight);
        height: auto;
    }    
    .tv-appbar-links {
        margin-right: 30px; 
        order: 3
    }
    .tv-appbar-interactive { 
        margin-left: auto;
    }
}
</style>
