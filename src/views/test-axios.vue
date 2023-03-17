<template>
    <div>{{ msg }}</div>
    <!-- <div v-if="msg === 'after'">hags</div>
    <div id="test"></div>
    <n-button type="tertiary" @click="handleAxiosTest"> 点我发送请求 </n-button><br>
    <n-button type="tertiary" @click="handleAxiosTest3">
        测试post请求
    </n-button>
    <n-button @click="cancelRequest">取消请求</n-button>
    <n-button @click="toTestPage">跳转页面</n-button> -->
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue'
    // import { useRouter } from 'vue-router'
    // import { ajaxGet, ajaxPost, cancelRequest } from '@/utils/axios'

    // const router = useRouter()

    const msg = ref('before')

    // const handleAxiosTest = async() => {
    //     try {
    //         const res = await ajaxGet('/test1', {})
    //         console.log(res, 'res2')
    //     } catch (e) {
    //         console.log(e, 'error2')
    //     }
    // }

    // const handleAxiosTest3 = async() => {
    //     const res = await ajaxPost('/test3', { name: 'zhangsan' })
    //     console.log(res, 'show post res')
    // }

    // const toTestPage = () => {
    //     router.push('/test')
    // }

    onMounted(() => {
    // handleAxiosTest()
    })
</script>


