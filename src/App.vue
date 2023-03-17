<template>
    <div class="app-view">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
    import Header from './components/Header.vue'

</script>

<style scoped>
.app-view {
    position: relative;
    width: 100vw;
    height: 100vh;
}
</style>
