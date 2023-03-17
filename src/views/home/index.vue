<script lang="ts" setup>
    import { onMounted } from 'vue'
    // import { useCounterStore } from '@/stores/counter'
    // import testAxios from '@/views/test-axios.vue'
    import List from '@/components/List.vue'


    // const counter = useCounterStore()

    onMounted(() => {

    })

</script>

<template>
    <div class="index-container">
        <div class="nav-box flex-center">
            <div class="nav-item">
                <i></i>
                <span>text1</span>
            </div>
            <div class="nav-item">
                <i></i>
                <span>text2</span>
            </div>
            <div class="nav-item">
                <i></i>
                <span>text3</span>
            </div>
            <div class="nav-item">
                <i></i>
                <span>text4</span>
            </div>
        </div>
        <div class="title-box"></div>
        <List></List>

    </div>
    <!-- <div @click="counter.increment()">累加器{{ counter.count }}</div> -->
    <!-- <test-axios></test-axios> -->
</template>

<style scoped>
.nav-box {
    width: 100%;
    height: 180px;
    background-color: aquamarine;
}
.nav-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
}

.nav-item i {
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background-color: azure;
    margin-bottom: 10px;
}

</style>

