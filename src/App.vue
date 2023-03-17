<template>
    <div class="app-view">
        <Header></Header>
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script setup lang="ts">
    import Header from './components/Header.vue'
    import Footer from '@/components/Footer.vue'

</script>

<style scoped>
.app-view {
    position: relative;
    width: 100vw;
    height: 100vh;
}
</style>
