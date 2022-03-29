<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import TvLink from '../TvLink/TvLink.vue';

interface Props {
    title?: string
    minimized?: boolean
    menuActive?: boolean
    minimizeDisabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    title: 'tv-app-toolbar',
    minimized: false,
    menuActive: false,
    minimizeDisabled: false,
})

const title = ref('')
const isMenuActive = ref(false)
const isMinimizedDisabled = ref(false)
const isMinimized = ref(true)

const MENU_ACTIVE_HEIGHT = '96px'
const MENU_INACTIVE_HEIGHT = '48px'
const BAR_DEFAULT_WIDTH = '100%'
const BAR_MINIMIZED_WIDTH = '220px'

const menuHeight = computed(() => { 
    return isMenuActive.value ? MENU_ACTIVE_HEIGHT : MENU_INACTIVE_HEIGHT
})
const barWidth = computed(() => {
    return isMinimized.value? BAR_MINIMIZED_WIDTH : BAR_DEFAULT_WIDTH
})

const emit = defineEmits<{
  (event: 'toolbarEvent', value: Object): Object
}>()

function toggleMinimal() {
    isMinimized.value = !isMinimized.value
    
    emit('toolbarEvent', { name: 'minimal', value: isMinimized.value } )
}

function toggleMenu() {
    isMenuActive.value = !isMenuActive.value

    emit('toolbarEvent', { name: 'menuActive', value: isMenuActive.value} )
}

onMounted(() => {
    title.value = props.title
    isMenuActive.value = props.menuActive
    isMinimizedDisabled.value = props.minimizeDisabled
    isMinimized.value = props.minimized
})
</script>

<template>
    <div class="tv-app-toolbar">
        <div class="tv-app-toolbar-logo">
            <slot name="logo"></slot>
        </div>
        <div class="tv-app-toolbar-headline" v-if="!isMinimized">
            <h6 v-text="props.title" class="tv-app-toolbar-title"></h6>
        </div>
        <div class="tv-app-toolbar-navigation" v-if="!isMinimized">
            <slot name="navigation"></slot>
        </div>
        <div class="tv-app-toolbar-social">
            <TvLink to="http://www.linkedin.com/in/tvandame">
                <font-awesome-icon
                    :icon="['fab', 'linkedin']"
                    size="lg"
                    color="var(--tv-c-white-mute)" />
            </TvLink>
            <tv-link to="http://github.com/travis-vandame">
                <font-awesome-icon 
                    :icon="['fab', 'github']" 
                    size="lg" 
                    color="var(--tv-c-white-mute)" />
            </tv-link>            
            <slot name="icons-social"></slot>        
        </div>
        <div class="tv-app-toolbar-icon-button-settings"
            @click="toggleMenu">
            <slot name="menu-icon"></slot>
        </div>
        <div class="tv-app-toolbar-icon-button-minimal"
            @click="toggleMinimal"
            v-if="!isMinimizedDisabled">
            <slot name="minimal-icon"></slot>
        </div>
        <div class="tv-app-toolbar-flexbox-break-item"></div>
        <div class="tv-app-toolbar-menu" v-if="isMenuActive">
            <slot 
                name="menu">
            </slot>
        </div>            
    </div>
</template>

<style scoped>
.tv-app-toolbar {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: fixed;
    flex-basis: auto;
    height: v-bind(menuHeight);
    width: v-bind(barWidth);
    align-items: center;
    background-color: var(--tv-c-black-mute);
    box-shadow: 1px 1px 3px 1px var(--tv-c-anchor-green);
    border-bottom-right-radius: 10px;
}
.tv-app-toolbar-title {
    margin: 0px; 
    padding: 0px; 
    color: var(--tv-c-white-mute);    
}
.tv-app-toolbar-logo {
    margin: 0px 15px 0px 15px;
    font-size: xx-large;
}
.tv-app-toolbar-headline {
    margin-left: 24px;
    margin-right: 15px;
}
.tv-app-toolbar-navigation {
    margin-left: auto;
}
.tv-app-toolbar-social {
    display: flex;
    flex-direction: row;
    max-width: 100px;
}
.tv-app-toolbar-social * {
    margin-right: 4px;
    margin-left: 4px;
}
.tv-app-toolbar-icon-button-settings {
    margin-right: 7.5px;
    margin-left: 7.5px;
    font-size: large;
}
.tv-app-toolbar-icon-button-minimal {
    margin-right: 15px;
    margin-left: 7.5px;
    font-size: large;
}
.tv-app-toolbar-flexbox-break-item {
    flex-basis: 100%; /* Things that make you think. TJV :P */
    height: 0px;
}
.tv-app-toolbar-menu {
    margin-left: auto;
    margin-right: 16px;
}
@media (max-width: 800px) {
    .tv-app-toolbar-headline {
        display: none;
    }
}
/* TODO: Fix this should be at 600px but slight icon bug so set to 610 */
@media (max-width: 610px) {
    .tv-app-toolbar {
        width: v-bind(barWidth);
        height: v-bind(menuHeight);
    }
    .tv-app-toolbar-navigation {
        display: none;
    }
}
@media (max-width: 480px) {
    .tv-app-toolbar {
        flex-direction: column;
        width: 60px;
        max-width: fit-content;
        height: 210px;
        box-shadow: 1px 1px 3px 1px var(--tv-c-anchor-green);
    }
    .tv-app-toolbar-logo {
        margin: 10px 0px 0px 0px;
        font-size: x-large;
    }
    .tv-app-toolbar-headline {
        display: none;
    }
    .tv-app-toolbar-social {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
    }
    .tv-app-toolbar-social * {
        margin: 0px 0px 10px 0px;
        font-size: x-large;
    }
    .tv-app-toolbar-icon-button-settings {
        font-size: large;
    }
    .tv-app-toolbar-icon-button-minimal {
        display: none;
    }    
    .tv-app-toolbar-menu {
        padding: 15px;
        margin-left: 10px;
        width: 100%;
        flex-basis: 100%;
        background-color: var(--tv-c-black-mute);
        box-shadow: 3px 3px 2px -1px var(--tv-c-anchor-green);
    }
}
</style>
