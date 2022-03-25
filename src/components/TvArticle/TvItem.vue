<script setup lang="ts"></script>
<template>
  <div class="detail">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="heading">
      <h5>
        <slot name="heading"></slot>
      </h5>      
    </div>
    <div class="content">
      <p>
        <slot name="content"></slot>
      </p>
    </div>        
  </div>
</template>
<style scoped>
.detail {
  display: grid;
  grid-template-areas: 
    "icon heading"
    "icon content";
  grid-template-columns: min-content;
}
.icon {
  text-align: center;
  grid-area: icon;
  padding: 5px;
}
.heading { 
  grid-area: heading;
}
.content {
  grid-area: content;
  margin-right: 25%;
}
h3 {
  margin: 0;
}
</style>
