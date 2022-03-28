<script setup lang="ts">
import type { ITvGitHubUsernameRepos } from '../services/github/types/index';

import { TvGitHubRestApi } from '../services/github/TvGitHubRestService'
import TvCard from '../components/TvCard/TvCard.vue'
import { ref } from 'vue';

const repos = ref<ITvGitHubUsernameRepos[]>()

async function fetchGitHubRepos({ owner }: { owner: string; }) {
  repos.value = await TvGitHubRestApi.fetchUsernameRepos(owner)
  console.log(repos)
}
</script>

<template>
  <div class="tv-app-project-view">
    <div class="tv-app-project-view-logo">
      <div class="tv-app-project-view-logo-item">
        <span class="tv-app-project-view-logo-item-letter-t">T</span>      
        <span class="tv-app-project-view-logo-item-letter-v">V</span>
        <span>
          <div class="tv-app-project-view-logo-item-title">
            <span class="tv-app-project-view-logo-item-title-text-one">GitHub</span> 
            <span class="tv-app-project-view-logo-item-title-text-two">Projects <span class="tv-app-project-view-text-used">used</span></span> 
            <span class="tv-app-project-view-logo-item-title-text-three" @click="fetchGitHubRepos({ owner: 'vuejs'})">@click="fetchRepos({ projectIds: []]})"</span>
          </div>
        </span>
      </div>
      <!-- TODO: Here we are duplicating HTML for the scrolling github data to satisfy mobile and desktop views -->
      <!-- vue teleport media options and javascript are all being evaluated to make this a little more friendly -->
      <div class="tv-app-project-view-scroll-desktop">
        <tv-card
          class="tv-card"
          v-for="repo in repos"
          :key="repo.id"
          :title="repo.name"
          :secondary="repo.html_url"
          :content="repo.description">
        </tv-card>
      </div>      
    </div>
    <div class="tv-app-project-view-scroll-mobile">
      <tv-card
        class="tv-card"
        v-for="repo in repos"
        :key="repo.id"
        :title="repo.name"
        :secondary="repo.html_url"
        :content="repo.description">
      </tv-card>
    </div>
  </div>
</template>
<style scoped>
.tv-app-project-view-scroll {
  display: flex;
  flex-direction: column;  
}
.tv-app-project-view-logo {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 50px;
}
.tv-app-project-view-logo-item {
  text-align: center;
  flex-basis: 100%;
}
.tv-app-project-view-logo-item-letter-t {
  font-size: 150px;
}
.tv-app-project-view-logo-item-letter-v {
  font-size: 200px;
}
.tv-app-project-view-logo-item-title {
  display: flex;
  flex-direction: column;
  font-size: 25px;
  flex-basis: 50%;
}
.tv-app-project-view-logo-item-title-text-one {
  margin-left: 10%;
  text-align: center;
  letter-spacing: 5px;
}
.tv-app-project-view-logo-item-title-text-two {
  text-transform: uppercase;
  font-size: 40px;
  color: var(--tv-c-anchor-green);
}
.tv-app-project-view-logo-item-title-text-three {
  letter-spacing: 1.5px;
  color: lightseagreen;
  font-size: medium;
}
.tv-app-project-view-logo-item-title-text-two span {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 14px;
}   
.tv-app-project-view-scroll-desktop {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
  align-items: center;
  height: 600px;
  margin-top: 3%;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.tv-app-project-view-scroll-desktop::-webkit-scrollbar {
  display: none;
}
.tv-app-project-view-scroll-mobile {
  display: none
}
/* TODO Remove this temp css below */
.tv-card {
  margin-bottom: 24px;
}
@media (max-width: 800px) { 
  .title-text-one {
    margin-left: 25%;
    text-align: center;
    letter-spacing: 5px;
  }  
}
@media (max-width: 600px) { 
  .title-text-one {
    margin-left: 25%;
    text-align: center;
    letter-spacing: 5px;
  }  
  .tv-app-project-view-scroll-desktop {
    overflow: scroll;
    align-items: center;
    height: 265px;
    margin-top: 5%;
    padding-top: 6px;
  }    
}
@media (max-width: 480px) { 
  .tv-app-project-view-logo-item-letter-t {
    font-size: 50px;
  }
  .tv-app-project-view-logo-item-letter-v {
    font-size: 100px;
  }
  .tv-app-project-view-logo-item-title-text-one {
    margin-right: 10%;
    text-align: right;
    letter-spacing: 5px;
  }
  .tv-app-project-view-logo-item-title-text-two {
    text-transform: uppercase;
    font-size: 30px;
    color: var(--tv-c-anchor-green);
  }
  .tv-app-project-view-scroll-desktop {
    display: none;
  }   
  .tv-app-project-view-scroll-mobile {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    align-items: center;
    height: 240px;
    margin-top: 0%;
    padding-top: 6px;
  }  
}
</style>
