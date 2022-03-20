<script setup lang="ts"></script>

<template>
    <div class="container">
        <header>
            <slot name="app-bar"></slot>
        </header>
        <aside>
            <slot name="navigation-drawer"></slot>
        </aside>
        <main style="margin-top: 96px;">
            <slot name="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped></style>
