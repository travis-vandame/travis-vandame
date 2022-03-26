<script setup lang="ts">
import TvAppBar from './components/TvAppBar/TvAppBar.vue'
import TvDrawer from "./components/TvDrawer/TvDrawer.vue"
import TvFooter from "./components/TvFooter/TvFooter.vue"
import TvLayout from "./components/TvLayout/TvLayout.vue"
import TvButton from "./components/TvButton/TvButton.vue"
import TvDisplay from "./components/TvDisplay/TvDisplay.vue"
</script>

<template>
  <tv-layout>
    <template v-slot:header>
      <tv-app-bar>
          <template v-slot:links>
            <tv-button 
                text="Home"
                to="/home"
                :cssOutline="false"
                cssTextColor="var(--tv-c-anchor-green)"
                cssBackgroundColor=""
                cssBackgroundColorHover="var(--color-background-soft)">
            </tv-button>
            <tv-button 
                text="Article"
                to="/about"
                :cssOutline="false"
                cssTextColor="var(--tv-c-anchor-green)"
                cssBackgroundColor=""
                cssBackgroundColorHover="var(--color-background-soft)">
            </tv-button>
            <tv-button 
                text="Changelog"
                to="changelog"
                :cssOutline="false"
                cssTextColor="var(--tv-c-anchor-green)"
                cssBackgroundColor=""
                cssBackgroundColorHover="var(--color-background-soft)">
            </tv-button>                        
            <tv-button 
                text="Project"
                to="project"
                :cssOutline="false"
                cssTextColor="var(--tv-c-anchor-green)"
                cssBackgroundColor=""
                cssBackgroundColorHover="var(--color-background-soft)">
            </tv-button>
          </template>          
          <template v-slot:menu>
              <tv-display></tv-display>
          </template>
      </tv-app-bar>      
    </template>
    <template v-slot:aside>
      <tv-drawer>
      </tv-drawer>
    </template>
    <template v-slot:article>
      <router-view>
      </router-view>
    </template>
    <template v-slot:footer>
      <tv-footer>
      </tv-footer>
    </template>            
  </tv-layout>
</template>
<!--

<BaseLayout>
    <template v-slot:app-bar>
      <TvAppBarVue />
    </template>
    <template v-slot:navigation-drawer>
      <TvDrawer />
    </template>
    <template v-slot:article>
      <router-link to="/about">Go to About</router-link>
      <router-link to="/about">Go to About</router-link>
      <router-link to="/about">Go to About</router-link>
      <router-link to="/about">Go to About</router-link>

      <router-view></router-view>
      <router-link to="/about">Go to About</router-link>
    </template>
    <template v-slot:footer>
      <TvFooter />
    </template>
  </BaseLayout>
</template>
-->
<style lang="css">
@import "@/assets/styles/index.css";
</style>
