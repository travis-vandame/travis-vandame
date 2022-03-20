<script setup lang="ts">
import { ref } from 'vue';
import TheThemeSwitch from './TheThemeSwitch.vue';
import Modal from './modal/Modal.vue';

const showModal = ref(false)
</script>

<template>
    <nav>
        <router-link :to="{ name: 'home' }" tag="button"><h1>.home()</h1></router-link>
        <router-link :to="{ name: 'about' }" tag="button"><h1>.about()</h1></router-link>
        <a href="#" @click="showModal = true"><h1>.prefrences()</h1></a>
    </nav>

    <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <modal :show="showModal" @close="showModal = false">
            <template #header>
                <h3>Prefrences</h3>
            </template>
            <template #body>
                <TheThemeSwitch />
            </template>
        </modal>
    </Teleport>        
</template>

<style scoped>
nav {
  text-align: right;
  margin-right: 10%;
}

nav a {
  display: inline-block;
  padding: 0 2rem;
}

nav a:hover {
  color: var(--vt-c-mdc-blue);
}

nav a.router-link-exact-active {
  color: var(--vt-c-vite-yellow);
}
</style>