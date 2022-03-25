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
  title: 'Travis VanDame',
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
            <font-awesome-icon
                size="lg" 
                color="var(--tv-c-mdc-blue)"             
                :icon="['fas', 'bars']" />
        </div>
        <div 
            v-if="!minimal" 
            class="tv-appbar-headline">
            <h6 v-text="props.title" class="tv-appbar-title"></h6>
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
        <div class="tv-appbar-icon">
            <font-awesome-icon
                @click="toggleTvAppBar"
                :icon="['fas', 'gear']" 
                size="lg" 
                color="var(--tv-c-mdc-blue)" />
        </div>
        <div class="tv-appbar-icon">
            <font-awesome-icon
                @click="toggleTvAppBarMinimal"
                :icon="['fas', 'minimize']"
                size="lg" 
                color="var(--tv-c-mdc-blue)" />
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
                                    
                <span>W: {{ windowWidth }} H: {{ windowHeight }}</span>
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
    box-shadow: 0 3px 2px -1px var(--tv-c-mdc-blue);
    transition: 0.3s ease;  
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
    margin-right: 15px
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
@media (max-width: 600px) {
    .tv-appbar {
        width: v-bind(tvAppBarWidth);
        height: v-bind(tvAppBarHeight);
    }
    .tv-appbar-headline {
        margin-right: 24px;
    }
    .tv-appbar-links {
        display: none;
    }
    .tv-appbar-interactive { 
        margin-left: auto;
    }
}
@media (max-width: 480px) {
    .tv-appbar {
        flex-direction: column;
        width: 55px;
        height: 275px;
        box-shadow: 2px 3px 2px -1px var(--tv-c-mdc-blue);
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
        padding-bottom: 12px;
        font-size: x-large;
     }
    .tv-appbar-system-information {
        width: 100%;
        padding: 15px;
        box-shadow: 2px 3px 2px -1px var(--tv-c-mdc-blue);
        background-color: var(--tv-c-black-mute);
    }
}
</style>
