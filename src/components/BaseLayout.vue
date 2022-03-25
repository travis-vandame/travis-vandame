<script setup lang="ts">
import TvLayout from './TvLayout/TvLayout.vue'
import TvAppBar from './TvAppBar/TvAppBar.vue'
import TvButton from './TvButton/TvButton.vue'
import TvArticle from './TvArticle/TvArticle.vue'
import TvFooter from './TvFooter/TvFooter.vue'
import TvDrawer from './TvDrawer/TvDrawer.vue'
import TvDisplay from './TvDisplay/TvDisplay.vue'
</script>

<template>
  <TvLayout>
    <template v-slot:header>
      <TvAppBar>
        <template v-slot:links>
          <tv-button 
              text="Home"
              :cssOutline="false"
              cssTextColor="var(--tv-c-anchor-green)"
              cssBackgroundColor=""
              cssBackgroundColorHover="var(--color-background-soft)">
          </tv-button>
          <tv-button 
              text="Article"
              :cssOutline="false"
              cssTextColor="var(--tv-c-anchor-green)"
              cssBackgroundColor=""
              cssBackgroundColorHover="var(--color-background-soft)">
          </tv-button>
          <tv-button 
              text="Changelog"
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
        </template>
        <template v-slot:menu>
          <tv-display></tv-display>
        </template>
      </TvAppBar>
    </template>
    <template v-slot:article>
      <tv-article />
    </template>
    <template v-slot:footer>
      <TvFooter />
    </template>
    <template v-slot:aside>
      <TvDrawer />
    </template>
  </TvLayout>
</template>
