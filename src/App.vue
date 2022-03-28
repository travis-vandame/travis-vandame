<script setup lang="ts">
import TvAppBar from './components/TvAppBar/TvAppBar.vue'
import TvFooter from "./components/TvFooter/TvFooter.vue"
import TvButton from "./components/TvButton/TvButton.vue"
import TvDisplay from "./components/TvDisplay/TvDisplay.vue"
</script>

<template>
  <div class="tv-app">
    <div class="tv-app-header">

      <tv-app-bar>
        <template v-slot:links>
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
              text="Changelog"
              to="/changelog"
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
        </template>          
        <template v-slot:menu>
            <tv-display></tv-display>
        </template>
      </tv-app-bar>
    </div>
    <div class="tv-app-body">
      <main class="tv-app-main">
        <div class="tv-app-vue-router">
          <router-view></router-view>
        </div>
      </main>
      <!-- <nav class="navigation" style="display: flex; position: fixed; bottom: 100px;"> -->
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
            text="Changelog"
            to="/changelog"
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
      <tv-footer :isFixed="true">footer</tv-footer> 

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
  flex-direction: column;
  flex: 1;
}
.tv-app-main {
  flex-grow: 1;  
}
.tv-app-navigation {
  display: none;
}
.tv-app-aside {
  display: none;
}
@media (max-width: 600px) {
  .tv-app-vue-router {
    display: flex;
    flex-direction: column;
  }
  .tv-app-navigation {
    /* TODO: Fix
    display: flex;
    justify-content: space-evenly;
    */
  }
  .tv-app-aside {
    display: none;
  }
}
@media (max-width: 480px) {
  .tv-app-navigation {
    display: none;
  }
  .tv-app-aside {
    display: none;
  }
}
</style>
