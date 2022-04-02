<script setup lang="ts">
import type { ITvGitHubRepoCommit } from '../services/github/types/index'

import { TvGitHubRestApi } from '../services/github/TvGitHubRestService'
import { onMounted, ref } from 'vue'

import TvCard from '../components/TvCard/TvCard.vue'
import TvLink from '../components/TvLink/TvLink.vue'
import TvTrack from '../components/TvTrack/TvTrack.vue'
import TvLogo from '../components/TvLogo/TvLogo.vue'

const repoCommits = ref<ITvGitHubRepoCommit[]>()

async function fetchGitHubRepoCommits(
  { owner }: { owner: string },
  { repo }: { repo: string }
) {
  // repoCommits.value = await TvGitHubRestApi.fetchOwnerRepoCommits(owner, repo)
  repoCommits.value = []
}

onMounted(() => {
  // fetchGitHubRepoCommits({ owner: 'travis-vandame' }, { repo: 'travis-vandame' })
})
</script>

<template>
  <div class="tv-app-commit-view">
    <div class="tv-app-c-content">
      <tv-logo></tv-logo>
      <tv-track
        class="tv-app-desktop-track"
        cssBoxShadow="var(--primary-box-shadow-scrollbar)"
        cssBackgroundColor=""
      >
        <template v-slot:content>
          <tv-card
            class="tv-card"
            v-for="commit in repoCommits"
            :key="commit.node_id"
            :title="commit.author.login"
            secondary=""
            :content="commit.commit.message"
          >
            <template v-slot:secondary>
              <tv-link :to="commit.html_url">
                {{ commit.commit.tree.sha.substring(0, 7) }}
              </tv-link>
            </template>
          </tv-card>
        </template>
      </tv-track>
      <tv-track
        class="tv-app-mobile-track"
        cssBoxShadow="var(--primary-box-shadow-scrollbar)"
        cssBackgroundColor="var(--primary-color)"
      >
        <!-- TODO: TvTrack will handle this so there will be no need for a-->
        <template v-slot:content>
          <tv-card
            class="tv-card"
            v-for="commit in repoCommits"
            :key="commit.node_id"
            :title="commit.author.login"
            secondary=""
            :content="commit.commit.message"
          >
            <template v-slot:secondary>
              <tv-link :to="commit.html_url">
                {{ commit.commit.tree.sha.substring(0, 7) }}
              </tv-link>
            </template>
          </tv-card>
        </template>
      </tv-track>
    </div>
  </div>
</template>
<style scoped>
.tv-app-commit-view {
  display: flex;
  flex-direction: column;
}
.tv-app-c-content {
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
  .tv-app-commit-view {
    display: flex;
    flex-direction: row;
  }
  .tv-app-c-content {
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
  .tv-app-commit-view {
    display: flex;
    flex-direction: row;
  }
  .tv-app-c-content {
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
  .tv-app-commit-view {
    display: flex;
    flex-direction: row;
  }
  .tv-app-c-content {
    display: flex;
    flex-direction: column;
  }
  .tv-card {
    margin: 0px;
  }
}
</style>
