<script setup lang="ts">
import type { ITvGitHubRepoCommit } from '../services/github/types/index';

import { TvGitHubRestApi } from '../services/github/TvGitHubRestService'
import { onMounted, ref } from 'vue';
import TvCard from '../components/TvCard/TvCard.vue'
import TvLink from '../components/TvLink/TvLink.vue'

const repoCommits = ref<ITvGitHubRepoCommit[]>()

async function fetchGitHubRepoCommits(
    { owner }: { owner: string; },
    { repo }: { repo: string; }
) {
  repoCommits.value = await TvGitHubRestApi.fetchOwnerRepoCommits(owner, repo)
}

onMounted(() => {
  fetchGitHubRepoCommits({ owner: 'travis-vandame' }, { repo: 'travis-vandame' })
})
</script>

<template>
  <div class="tv-app-commit-view">
    <div class="tv-app-commit-view-logo">
      <div class="tv-app-commit-view-logo-item">
        <span class="tv-app-commit-view-logo-item-letter-t">T</span>      
        <span class="tv-app-commit-view-logo-item-letter-v">V</span>
        <span>
          <div class="tv-app-commit-view-logo-item-title">
            <span class="tv-app-commit-view-logo-item-title-text-one">GitHub</span> 
            <span class="tv-app-commit-view-logo-item-title-text-two">Commits <span class="tv-app-commit-view-text-used">made</span></span> 
            <span class="tv-app-commit-view-logo-item-title-text-three">Current user commits</span>
          </div>
        </span>
      </div>
      <!-- TODO: Here we are duplicating HTML for the scrolling github data to satisfy mobile and desktop views -->
      <!-- vue teleport media options and javascript are all being evaluated to make this a little more friendly -->
      <div class="tv-app-commit-view-scroll-desktop">
        <tv-card
          class="tv-card"
          v-for="commit in repoCommits"
          :key="commit.node_id"
          :title="commit.author.login"
          secondary=""
          :content="commit.commit.message">
          <template v-slot:secondary>
            <tv-link :to="commit.html_url">{{ commit.commit.tree.sha.substring(0, 7) }}</tv-link>
          </template>          
        </tv-card>
      </div>      
    </div>
    <div class="tv-app-commit-view-scroll-mobile">
      <tv-card
          class="tv-card"
          v-for="commit in repoCommits"
          :key="commit.node_id"
          :title="commit.author.login"
          secondary=""
          :content="commit.commit.message">
          <template v-slot:secondary>
            <tv-link :to="commit.html_url">{{ commit.commit.tree.sha.substring(0, 7) }}</tv-link>
          </template>
      </tv-card>
    </div>
  </div>
</template>
<style scoped>
.tv-app-commit-view-scroll {
  display: flex;
  flex-direction: column;  
}
.tv-app-commit-view-logo {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 50px;
  margin-bottom: 10px;  
}
.tv-app-commit-view-logo-item {
  text-align: center;
  flex-basis: 80%;
}
.tv-app-commit-view-logo-item-letter-t {
  font-size: 150px;
}
.tv-app-commit-view-logo-item-letter-v {
  font-size: 200px;
}
.tv-app-commit-view-logo-item-title {
  display: flex;
  flex-direction: column;
  font-size: 25px;
  flex-basis: 50%;
}
.tv-app-commit-view-logo-item-title-text-one {
  margin-left: 10%;
  text-align: center;
  letter-spacing: 5px;
}
.tv-app-commit-view-logo-item-title-text-two {
  text-transform: uppercase;
  font-size: 40px;
  color: var(--tv-c-anchor-green);
}
.tv-app-commit-view-logo-item-title-text-three {
  letter-spacing: 1.5px;
  color: lightseagreen;
  font-size: medium;
}
.tv-app-commit-view-logo-item-title-text-two span {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 14px;
}   
.tv-app-commit-view-scroll-desktop {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
  align-items: center;
  height: 450px;
  margin-top: 6%;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.tv-app-commit-view-scroll-desktop::-webkit-scrollbar {
  display: none;
}
.tv-app-commit-view-scroll-mobile {
  display: none
}
/* TODO Remove this temp css below */
.tv-card {
  margin-top: 20px;
  margin-bottom: 30px;
}
@media (max-width: 800px) { 
  .title-text-one {
    margin-left: 25%;
    text-align: center;
    letter-spacing: 5px;
  }  
}
@media (max-width: 600px) { 
  .tv-app-commit-view-logo-item {
    text-align: center;
    flex-basis: 100%;
  }   
  .tv-app-commit-view-logo-item-letter-t {
    font-size: 50px;
  }
  .tv-app-commit-view-logo-item-letter-v {
    font-size: 100px;
  }
  .tv-app-commit-view-logo-item-title-text-one {
    margin-left: 10%;
    text-align: center;
    letter-spacing: 5px;
  }
  .tv-app-commit-view-logo-item-title-text-two {
    text-transform: uppercase;
    font-size: 30px;
    color: var(--tv-c-anchor-green);
  }
  .tv-app-commit-view-scroll-desktop {
    display: none;
  }   
  .tv-app-commit-view-scroll-mobile {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    align-items: center;
    height: 300px;
    margin-top: 6%;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }        
}
@media (max-width: 480px) {
  .tv-app-commit-view-logo-item {
    text-align: center;
    flex-basis: 100%;
  }   
  .tv-app-commit-view-logo-item-letter-t {
    font-size: 50px;
  }
  .tv-app-commit-view-logo-item-letter-v {
    font-size: 100px;
  }
  .tv-app-commit-view-logo-item-title-text-one {
    margin-right: 10%;
    text-align: right;
    letter-spacing: 5px;
  }
  .tv-app-commit-view-logo-item-title-text-two {
    text-transform: uppercase;
    font-size: 30px;
    color: var(--tv-c-anchor-green);
  }
  .tv-app-commit-view-scroll-desktop {
    display: none;
  }   
  .tv-app-commit-view-scroll-mobile {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    align-items: center;
    height: 195px;
    padding-top: 6px;
  }  
}
</style>
