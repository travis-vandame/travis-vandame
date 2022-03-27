<script setup lang="ts">
import TvAppBar from './components/TvAppBar/TvAppBar.vue'
import TvFooter from "./components/TvFooter/TvFooter.vue"
import TvButton from "./components/TvButton/TvButton.vue"
import TvDisplay from "./components/TvDisplay/TvDisplay.vue"
</script>

<template>
  <div class="template">
    <header>
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
            <tv-display>
            </tv-display>
        </template>
      </tv-app-bar>
    </header>
    <div class="body">
      <main class="main">
        <div class="router">
          <router-view class="router-view"></router-view>
        </div>
      </main>
      <!-- <nav class="navigation" style="display: flex; position: fixed; bottom: 100px;"> -->
      <nav class="navigation">
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
      <aside class="aside">ASide</aside>
      <tv-footer :isFixed="true">footer</tv-footer>
    </div>  
  </div>
</template>

<style>
@import "@/assets/styles/index.css";
.template {
  display: flex;
  flex-direction: column;  
  min-height: 100vh;
}
.body {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.main {
  flex-grow: 1;  
}
.navigation {
  display: none;
}
.aside {
  display: none;
}
@media (max-width: 600px) {
  .body {
    flex-direction: column;
  }
  .router {
    margin: 5px;

    display: flex;
    flex-direction: column;
  }
  .router-view {
    margin: 5px;
  }  
  .navigation {
    display: flex;
    justify-content: space-evenly;
  }
  .aside {
    display: none;
  }
}
@media (max-width: 480px) {
  .body {
    flex-direction: column;
  }
  .router {
    display: flex;
    justify-content: flex-end;   
  }
  .router-view {
    flex-basis: 83%;
  }
  .navigation {
    display: flex;
    justify-content: space-evenly;
  }
  .aside {
    display: none;
  }
}
</style>
