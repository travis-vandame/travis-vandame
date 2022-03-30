<script setup lang="ts">
import { ref } from 'vue';
import TvLink from '../TvLink/TvLink.vue'

interface Props {
  isFixed?: boolean
  cssBackgroundColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  isFixed: true,
  cssBackgroundColor: ''
})

const position = ref(props.isFixed ? 'fixed' : 'inline')
</script>

<template>
  <div 
    class="tv-app-footer">
    <div class="vite">
      <tv-link to="http://www.vitejs.dev">
        <img
          alt="Vite logo"
          class="logo"
          src="@/assets/images/vite-logo.svg" />
      </tv-link>            
    </div>
    <div class="vue">
      <tv-link to="http://vuejs.org/">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/images/vue-logo.svg" />
      </tv-link>        
    </div>      
    <div class="mdn">
      <tv-link to="https://developer.mozilla.org/">
        <svg 
            id="mdn-logo" 
            class="logo" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            x="0px" 
            y="0px" 
            viewBox="0 0 361 104.2" 
            xml:space="preserve">
            <g class="logo-m">
                <path d="M40.3,0L11.7,92.1H0L28.5,0H40.3z"></path>
                <path d="M50.7,0v92.1H40.3V0H50.7z"></path>
                <path d="M101.4,0v92.1H91V0H101.4z"></path>
                <path d="M91,0L62.5,92.1H50.8L79.3,0H91z"></path>
                <path d="M294,95.4h67v8.8h-67V95.4z"></path>
            </g>
            <g class="logo-text">
                <path d="M198.7,72.8h-17.1v-5.5h3.8V51.5c0-3.7-0.7-6.3-2.1-7.9c-1.4-1.6-3.3-2.3-5.7-2.3c-3.2,0-5.6,1.1-7.2,3.4 s-2.4,4.6-2.5,6.9v15.6h6v5.5h-17.1v-5.5h3.8V51.5c0-3.8-0.7-6.4-2.1-7.9c-1.4-1.5-3.3-2.3-5.6-2.3c-3.2,0-5.5,1.1-7.2,3.3 c-1.6,2.2-2.4,4.5-2.5,6.9v15.8h6.9v5.5h-20.2v-5.5h6V42h-6.1v-5.6h13.4v6.4c1.2-2.1,2.7-3.8,4.7-5.2c2-1.3,4.4-2,7.3-2 c2.8,0,5.3,0.7,7.5,2.1c2.2,1.4,3.7,3.5,4.5,6.4c1.1-2.5,2.7-4.5,4.9-6.1c2.2-1.6,4.8-2.4,7.9-2.4c3.5,0,6.5,1.1,8.9,3.3 c2.4,2.2,3.7,5.6,3.7,10.2v18.2h6.1V72.8z"></path>
                <path d="M241.2,72.8h-13.2v-7.2c-1.2,2.2-2.8,4.1-4.9,5.6c-2.1,1.6-4.8,2.4-8.3,2.4c-4.8,0-8.7-1.6-11.6-4.9 c-2.9-3.2-4.3-7.7-4.3-13.3c0-5,1.3-9.6,4-13.7c2.6-4.1,6.9-6.2,12.8-6.2c5.7,0,9.8,2.2,12.3,6.5V22.3h-8.6v-5.6h15.8v50.6h6 V72.8z M227.9,56v-4.4c-0.1-3-1.2-5.5-3.2-7.3c-2-1.8-4.4-2.8-7.2-2.8c-3.6,0-6.3,1.3-8.2,3.9c-1.9,2.6-2.8,5.8-2.8,9.6 c0,4.1,1,7.3,3,9.5c2,2.2,4.5,3.3,7.4,3.3c3.2,0,5.8-1.3,7.8-3.8C226.8,61.4,227.8,58.7,227.9,56z"></path>
                <path d="M286.4,72.8h-19.3v-5.5h6V51.5c0-3.7-0.7-6.3-2.2-7.9c-1.4-1.6-3.4-2.3-5.7-2.3c-3.1,0-5.6,1-7.4,3c-1.8,2-2.8,4.4-2.9,7 v15.9h6v5.5h-19.3v-5.5h6V42h-6.2v-5.6h13.6v6.2c2.6-4.6,6.8-6.9,12.7-6.9c3.6,0,6.7,1.1,9.2,3.3c2.5,2.2,3.7,5.6,3.7,10.2v18.2 h6V72.8z"></path>
            </g>
        </svg>
      </tv-link>
    </div>
    <div class="github">
      <tv-link to="http://www.github.com">
        <img
            alt="GitHub logo"
            class="logo"
            src="@/assets/images/octocat-logo.png" />
      </tv-link>
    </div>
  </div>
</template>

<style scoped>
.tv-app-footer {
  display: flex;
  position: v-bind(position);
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between; /* :/ align justify bla.... */
  background-color: v-bind(cssBackgroundColor);
  transition: 0.3s ease;
}
.logo {
  height: 56px;
  width: 80px;
  margin-bottom: 16px;
  margin-top: 16px;
  margin-left: 12px;
  margin-right: 12px;
}
.logo-m{fill:#74a9f6;}
.logo-text{fill:#fbfbfe;}
@media (max-width: 600px) { }
@media (max-width: 480px) { 
  .logo {
    height: 46px;
    width: 70px;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }  
}  
</style>
