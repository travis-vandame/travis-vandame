<script setup lang="ts"></script>

<template>
  <div class="b-card">
    <div class="b-card-profile">
      <h1>.is()</h1>
      <b>~:$ full stack developer</b>
      <font-awesome-icon icon="fa-brands fa-linkedin" />
    </div>
    <div class="b-card-story">
      <article style="margin:20px">
        <p>Wellcome to my work in progress. While you click around the site keep in mind if your cureous about what makes it tick your can pop the 
        hood and see what keeps this thing on over in the GitHub repository.</p>

        <p>This site is being developed using the technology stack listed in the ltr navigation drawer. If your having trouble finding it just
        <a href="#">click here</a> and I'll light it up for you. I will not be using any UI Component or CSS frameworks for this site as it's intended to be
        a multi pourpose solution. The requirements for the project are as follows.</p>
      </article>       
    </div>
    <div class="b-card-logo">
      <img height="400" width="700" src="../assets/ide-working.PNG" />
    </div>
  </div>  
</template>

<style scoped>
.b-card {
  display: grid;
  grid-template-areas: 
    "b-card-profile b-card-profile"
    "b-card-story b-card-logo";
  grid-template-columns: 1fr 2fr;
}

.b-card-profile {
  grid-area: b-card-profile;
}

.b-card-story {
  grid-area: b-card-story;
}

.b-card-story, div {
  vertical-align:center;
}

.b-card-logo {
  grid-area: b-card-logo;
  margin: auto;
}

h1 {
  margin: 0px;
  color: var(--vt-c-vite-yellow)
}

h1 b {
  color: var(--vt-c-mdc-blue)
}

b {
  color: var(--vt-c-green)
}
</style>
