<script setup lang="ts"></script>

<template>
    <div class="container">
        <header>
            <slot name="app-bar" />
        </header>
        <aside>
            <slot name="navigation-drawer" />
        </aside>
        <main style="margin-top: 96px;">
            <slot name="main" />
        </main>
        <footer>
            <slot name="footer" />
        </footer>
    </div>
</template>

<style scoped></style>
