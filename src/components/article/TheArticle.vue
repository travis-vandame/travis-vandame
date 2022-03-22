<script setup lang="ts">
import ArticleItem from "./ArticleItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <ArticleItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>
    <template #content>
      Coming soon i'll be creating documentation and examples focusing on the latest version of Vue. 
      For now though you can visit Vue’s <a target="_blank" href="https://vuejs.org/">official documentation</a>
      as it provides you with all information you need to get started.
    </template>
  </ArticleItem>

  <ArticleItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>
    <template #content>
        This project is served in my development enviorment and bundled with
        <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>.
        The IDE setup I'm using is
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>.
        For testing components and pages, i'll be using
        <a href="https://www.cypress.io/" target="_blank">Cypress</a> and reviewing
        <a
          href="https://docs.cypress.io/guides/component-testing/introduction"
          target="_blank"
          >Cypress Component Testing</a
        >
        <br />
        More instructions are available in <code>README.md</code>.
    </template>
  </ArticleItem>

  <ArticleItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>
    <template #content>
      Got stuck? Ask your question on
      <a class="green" target="_blank" href="https://chat.vuejs.org">Vue Land</a>, our official
      Discord server, or
      <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js"
        >StackOverflow</a
      >. You should also subscribe to
      <a target="_blank" href="https://news.vuejs.org">our mailing list</a> and
      follow the official
      <a target="_blank" href="https://twitter.com/vuejs">@vuejs</a>
      twitter account for latest news in the Vue world.
    </template>
  </ArticleItem>

  <ArticleItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>
    <template #content>
      Vue is an independent project, Vue relies on community backing for its
      sustainability. You can help the community by
      <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
    </template>
  </ArticleItem>

  <ArticleItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>
    <template #content>
      I'll be using official tools and libraries for this project:
      <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>,
      <a target="_blank" href="https://router.vuejs.org/">Vue Router</a>,
      <a target="_blank" href="https://test-utils.vuejs.org/">Vue Test Utils</a>,
      and
      <a target="_blank" href="https://github.com/vuejs/devtools">Vue Dev Tools</a
      >. If you need more resources, It's suggested you pay pay
      <a target="_blank" href="https://github.com/vuejs/awesome-vue"
        >Awesome Vue</a> a visit.
    </template>
  </ArticleItem>  
</template>

<style scoped></style>
