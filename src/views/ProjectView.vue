<script setup lang="ts">
import type { ITvGitHubUsernameRepos } from '../services/github/types/index';

import { TvGitHubRestApi } from '../services/github/TvGitHubRestService'
import { onMounted, ref } from 'vue';

import TvCard from '../components/TvCard/TvCard.vue'
import TvLink from '../components/TvLink/TvLink.vue'
import TvTrack from '../components/TvTrack/TvTrack.vue'
import TvLogo from '../components/TvLogo/TvLogo.vue'

const userRepos = ref<ITvGitHubUsernameRepos[]>()

async function fetchGitHubReposByUserRepo({ owners }: { owners: Array<string>[] }) {
  const data = await TvGitHubRestApi.fetchReposByUserRepo(owners)

  userRepos.value = data
}

onMounted(() => { 
  let owners = [
    ['vuejs', 'vue'],
    ['travis-vandame', 'travis-vandame'],
    ['vitejs', 'vite'],
    ['vuejs', 'core'],
    ['microsoft', 'TypeScript'],
    ['johnsoncodehk', 'volar'],
    ['vuejs', 'router'],
    ['DefinitelyTyped', 'DefinitelyTyped'] 
  ]

  fetchGitHubReposByUserRepo({owners: owners})
})
</script>

<template>
  <div class="tv-app-project-view">
    <div class="tv-app-p-content">
      <tv-logo></tv-logo>
      <tv-track class="tv-app-desktop-track"
        cssBoxShadow="var(--primary-box-shadow-scrollbar)" 
        cssBackgroundColor="">
        <template v-slot:content>
          <tv-card
            v-for="userRepo in userRepos"
            :key="userRepo.id"
            :title="userRepo.owner.login"
            secondary=""
            :content="userRepo.description"
            cssBackgroundColor=""
            cssBackgroundColorCard="var(--primary-color-light)">

            <template v-slot:secondary>
              <tv-link :to="userRepo.html_url">{{ userRepo.full_name }}</tv-link>
            </template>
            <template v-slot:action>
              <img :src="userRepo.owner.avatar_url" height="25" width="25" style="border-radius: 50%" alt="Avatar">
            </template>           
          </tv-card>          
        </template>
      </tv-track>
      <tv-track class="tv-app-mobile-track"
        cssBoxShadow="var(--primary-box-shadow-scrollbar)" 
        cssBackgroundColor="var(--primary-color)">
        <!-- TODO: TvTrack will handle this so there will be no need for a-->
        <template v-slot:content>
          <tv-card
            class="tv-card"
            v-for="userRepo in userRepos"
            :key="userRepo.id"
            :title="userRepo.owner.login"
            secondary=""
            :content="userRepo.description"
            cssBackgroundColorCard="var(--primary-color-light)">

            <template v-slot:secondary>
              <tv-link :to="userRepo.html_url">{{ userRepo.full_name }}</tv-link>
            </template>
            <template v-slot:action>
              <img :src="userRepo.owner.avatar_url" height="25" width="25" style="border-radius: 50%" alt="Avatar">
            </template>           
          </tv-card>          
        </template>
      </tv-track>
    </div>
  </div>
</template>
<style scoped>
.tv-app-project-view {
  display: flex;
  flex-direction: column;
}
.tv-app-p-content {
  display: flex;
  flex-direction: row;
}
.tv-app-desktop-track {
  align-items: center;
  width: 40%;
}
.tv-app-mobile-track {
  display: none;
}
@media (max-width: 800px) { 
  .tv-app-project-view{
    display: flex;
    flex-direction: row;
  }
  .tv-app-p-content {
    display: flex;
    flex-direction: column;
  }   
  .tv-card {
    margin: 0px;
  }
  .tv-app-desktop-track {
    display: none;
  }
  .tv-app-mobile-track {
    display: flex;
  }
}
/* TODO: Fix this should be 600 */
@media (max-width: 610px) { 
  .tv-app-project-view{
    display: flex;
    flex-direction: row;
  }
  .tv-app-p-content {
    display: flex;
    flex-direction: column;
  }  
  .tv-card {
    margin: 0px;
  }
  .tv-app-desktop-track {
    display: none;
  }
  .tv-app-mobile-track {
    display: flex;
  }
}
@media (max-width: 480px) {
  .tv-app-mobile-track {
    display: flex;
  }
  .tv-app-desktop-track {
    display: none;
  }  
  .tv-app-project-view{
    display: flex;
    flex-direction: row;
  }
  .tv-app-p-content {
    display: flex;
    flex-direction: column;
  }   
  .tv-card {
    margin: 0px;
  }
}
</style>
