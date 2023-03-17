<template>
    <van-sticky>
        <div class="header-container flex-center">
            <div class="left-icon"></div>
            <div class="logo"></div>
            <div class="search-box">
                <i class="search-icon"></i>
                Header
            <!-- <input type="text" placeholder="请输入"> -->
            </div>
            <div class="right-message"></div>
        </div>

    </van-sticky>

</template>

<script lang="ts" setup>
    import { onMounted } from 'vue'

    // defineProps<{ msg: string }>()

    onMounted(() => {

    })
</script>

<style scoped>
.header-container {
  width: 100%;
  height: 100px;
  background-color: antiquewhite;
}

</style>