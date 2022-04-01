<script setup lang="ts">
import TvToolbar from "./components/TvToolbar/TvToolbar.vue"
import TvFooter from "./components/TvFooter/TvFooter.vue"
import TvButton from "./components/TvButton/TvButton.vue"
import TvDisplay from "./components/TvDisplay/TvDisplay.vue"
import TvLink from "./components/TvLink/TvLink.vue"

function eventListener(event: Object) { }
</script>

<template>
  <div class="tv-app">
    <div class="tv-app-header">
      <tv-toolbar class="tv-app-toolbar"
        v-on:toolbarEvent="eventListener"
        title="Travis VanDame"
        cssBackgroundColor="var(--primary-color-dark)"
        cssMenuBackgroundColor=""
        cssBoxShadow="var(--primary-box-shadow)" 
        >
        <template v-slot:logo>
          <tv-link to="http://travis-vandame/github.io">
              <font-awesome-icon
                  size="lg" 
                  color="var(--tv-c-anchor-green)"             
                  :icon="['fa-brands', 'vuejs']" />
          </tv-link>          
        </template>
        <template v-slot:navigation>
          <tv-button 
              text="Home"
              to="/home"
              :cssOutline="false"
              cssTextColor="var(--color-secondary-background-text)"
              cssBackgroundColor="var(--color-secondary-background)"
              cssBackgroundColorHover="var(--color-background-soft)">
          </tv-button>
          <tv-button 
              text="About"
              to="/about"
              :cssOutline="false"
              cssTextColor="var(--color-secondary-background-text)"
              cssBackgroundColor="var(--color-secondary-background)"
              cssBackgroundColorHover="var(--color-background-soft)">
          </tv-button>
          <tv-button 
              text="Commits"
              to="/commit"
              :cssOutline="false"
              cssTextColor="var(--color-secondary-background-text)"
              cssBackgroundColor="var(--color-secondary-background)"
              cssBackgroundColorHover="var(--color-background-soft)">
          </tv-button>                        
          <tv-button 
              text="Project"
              to="/project"
              :cssOutline="false"
              cssTextColor="var(--color-secondary-background-text)"
              cssBackgroundColor="var(--color-secondary-background)"
              cssBackgroundColorHover="var(--color-background-soft)">
          </tv-button>
        </template>
        <template v-slot:icons-social>

        </template>
        <template v-slot:menu-icon>
          <font-awesome-icon
              :icon="['fas', 'gear']" 
              size="lg" 
              color="var(--tv-c-white-mute)" />          
        </template>          
        <template v-slot:menu>
            <tv-display></tv-display>
        </template>
        <template v-slot:minimal-icon>
            <font-awesome-icon
                :icon="['fas', 'minimize']"
                size="lg" 
                color="var(--tv-c-white-mute)" />          
        </template>
      </tv-toolbar>
    </div>
    <div class="tv-app-body">
      <div class="tv-app-vue-router">
        <router-view></router-view>
      </div>      
      <nav class="tv-app-navigation">
        <tv-button 
            text="Home"
            to="/home"
            :cssOutline="false"
            cssTextColor="var(--tv-c-anchor-green)"
            cssBackgroundColor="var(--tv-c-black-mute)"
            cssBackgroundColorHover="var(--color-background-soft)">
        </tv-button>
        <tv-button 
            text="About"
            to="/about"
            :cssOutline="false"
            cssTextColor="var(--tv-c-anchor-green)"
            cssBackgroundColor="var(--tv-c-black-mute)"
            cssBackgroundColorHover="var(--color-background-soft)">
        </tv-button>
        <tv-button 
            text="Commits"
            to="/commit"
            :cssOutline="false"
            cssTextColor="var(--tv-c-anchor-green)"
            cssBackgroundColor="var(--tv-c-black-mute)"
            cssBackgroundColorHover="var(--color-background-soft)">
        </tv-button>                        
        <tv-button 
            text="Project"
            to="/project"
            :cssOutline="false"
            cssTextColor="var(--tv-c-anchor-green)"
            cssBackgroundColor="var(--tv-c-black-mute)"
            cssBackgroundColorHover="var(--color-background-soft)">
        </tv-button>      
      </nav>
      <aside class="tv-app-aside">ASide</aside>
    </div>
    <div class="tv-app-footer">
      <tv-footer
        :isFixed="true"
        cssBackgroundColor="var(--primary-color-light)">
      </tv-footer>     
    </div>
  </div>
</template>

<style>
@import "@/assets/styles/index.css";
.tv-app {
  display: flex;
  flex-direction: column;  
  min-height: 100vh;
}
.tv-app-body {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-basis: 100%;
  flex: 1;
}
/* TODO: Review this looks like it could be removed with minor changes */
.tv-app-vue-router {
  flex-grow: 1;  
}
.tv-app-navigation {
  display: none;
}
.tv-app-aside {
  display: none;
}
@media (max-width: 600px) { }
@media (max-width: 480px) { }
</style>
