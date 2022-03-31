<script setup lang="ts">
import type { ITvGitHubUsernameRepos } from '../services/github/types/index';

import { TvGitHubRestApi } from '../services/github/TvGitHubRestService'
import { onMounted, ref } from 'vue';
import TvCard from '../components/TvCard/TvCard.vue'
import TvLink from '../components/TvLink/TvLink.vue'
import TvTrack from '../components/TvTrack/TvTrack.vue'

const userRepos = ref<ITvGitHubUsernameRepos[]>()

//async function fetchGitHubRepos({ owner }: { owner: string }) {
//  const data = await TvGitHubRestApi.fetchUsernameRepos(owner)
//  
//  userRepos.value
//}

async function fetchGitHubReposByUserRepo({ owners }: { owners: Array<string>[] }) {
  const data = await TvGitHubRestApi.fetchReposByUserRepo(owners)

  userRepos.value = data
}

onMounted(() => {
  // fetchGitHubRepos({ owner: 'vuejs'})
  
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
    <div class="tv-app-project-view-logo">
      <div class="tv-app-project-view-logo-item">
        <span class="tv-app-project-view-logo-item-letter-t">T</span>      
        <span class="tv-app-project-view-logo-item-letter-v">V</span>
        <span>
          <div class="tv-app-project-view-logo-item-title">
            <span class="tv-app-project-view-logo-item-title-text-one">GitHub</span> 
            <span class="tv-app-project-view-logo-item-title-text-two">Project <span class="tv-app-project-view-text-used">deps</span></span> 
            <span class="tv-app-project-view-logo-item-title-text-three">Project dependencies</span>
          </div>
        </span>
      </div>
      <tv-track
        class="desktop-track"
        cssBoxShadow="var(--primary-box-shadow-scrollbar)" 
        cssBackgroundColor="var(--primary-color-dark)">
        <template v-slot:content>
          <tv-card
            class="tv-card"
            v-for="userRepo in userRepos"
            :key="userRepo.id"
            :title="userRepo.owner.login"
            secondary=""
            :content="userRepo.description">

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
      <tv-track
        class="mobile-track"
        cssBoxShadow="var(--primary-box-shadow-scrollbar)" 
        cssBackgroundColor="var(--primary-color-dark)">
        <template v-slot:content>
          <tv-card
            class="tv-card"
            v-for="userRepo in userRepos"
            :key="userRepo.id"
            :title="userRepo.owner.login"
            secondary=""
            :content="userRepo.description">

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
</template>
<style scoped>
.tv-app-project-view-logo {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 50px;
  margin-bottom: 10px;
}
.tv-app-project-view-logo-item {
  text-align: center;
  flex-basis: 80%;
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
  font-size: medium;
}
.tv-app-project-view-logo-item-title-text-two span {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 14px;
}
/* TODO Remove this temp css below */
.tv-card {
  margin-top: 20px;
  margin-bottom: 30px;
}
.desktop-track {
  display: flex;
}
.mobile-track {
  display: none;
}
@media (max-width: 800px) { 
  .title-text-one {
    margin-left: 25%;
    text-align: center;
    letter-spacing: 5px;
  }  
}
@media (max-width: 600px) { 
  .tv-app-project-view-logo-item {
    text-align: center;
    flex-basis: 100%;
  }   
  .tv-app-project-view-logo-item-letter-t {
    font-size: 50px;
  }
  .tv-app-project-view-logo-item-letter-v {
    font-size: 100px;
  }
  .tv-app-project-view-logo-item-title-text-one {
    margin-left: 10%;
    text-align: center;
    letter-spacing: 5px;
  }
  .tv-app-project-view-logo-item-title-text-two {
    text-transform: uppercase;
    font-size: 30px;
    color: var(--tv-c-anchor-green);
  }        
}
@media (max-width: 480px) {
  .tv-app-project-view-logo-item {
    text-align: center;
    flex-basis: 100%;
  }   
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
  .desktop-track {
    display: none;
  }
  .mobile-track {
    display: flex;
  }
}
</style>
