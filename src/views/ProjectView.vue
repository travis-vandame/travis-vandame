<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="logo">
      <div class="logo-item">
        <span class="letter-t">T</span>      
        <span class="letter-v">V</span>
        <span>
          <div class="title">
            <span class="title-text-one">Full</span> 
            <span class="title-text-two">Project</span> 
            <span class="title-text-three">`In ${develop}ment`</span>
          </div>
        </span>
      </div>       
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;  
}
.logo {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5%;
}
.logo-item {
  text-align: center;
  flex-basis: 100%;
}
.letter-t {
  font-size: 150px;
}
.letter-v {
  font-size: 200px;
}
.title {
  display: flex;
  flex-direction: column;
  font-size: 25px;
  flex-basis: 50%;
}
.title-text-one {
  margin-left: 10%;
  text-align: center;
  letter-spacing: 5px;
}
.title-text-two {
  text-transform: uppercase;
  font-size: 40px;
}

.title-text-three {
  letter-spacing: 10px;
  font-size: medium;
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
}
@media (max-width: 480px) {
  .logo-item {
    flex-basis: 85%;
    text-align: center;
  }
  .title-text-one {
    margin-left: 20%;
    text-align: left;
    letter-spacing: 5px;
  }
}
</style>