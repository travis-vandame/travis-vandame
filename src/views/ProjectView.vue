<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="logo">
      <div class="logo-item">
        <span class="letter-t">T</span>      
        <span class="letter-v">V</span>
        <div class="title">Project</div>
      </div>       
    </div>
    <div>Current and past projects</div>
  </div>
</template>
<style scoped>
.container {
  /* border: 1px solid yellow; */

  display: flex;
  flex-direction: column;  
}
.logo {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.logo-item {
  /* border: 1px solid chartreuse; */

  text-align: center;
  flex-basis: 100%;
}
.letter-t {
  font-size: 150px;
}
.letter-v {
  font-size: 200px;
}
@media (max-width: 800px) { 
}
@media (max-width: 600px) { 
}
@media (max-width: 480px) {
  .logo-item {
    flex-basis: 85%;
    text-align: center;
  }
}

</style>