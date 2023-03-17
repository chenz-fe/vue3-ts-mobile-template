<template>
    <div class="message-list-container">
        <van-list
            v-model:loading="loading"
            :finished="finished"
            @load="onLoad"
        >
            <van-cell v-for="item in list" :key="item">
                List Item
            </van-cell>
        </van-list>

    </div>
</template>

<script lang="ts" >
    import { ref } from 'vue'
    export default {
        setup() {
            const list = ref([] as number[])
            const loading = ref(false)
            const finished = ref(false)

            const onLoad = () => {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        list.value.push(list.value.length + 1)
                    }

                    // 加载状态结束
                    loading.value = false

                    // 数据全部加载完成
                    if (list.value.length >= 20) {
                        finished.value = true
                    }
                }, 1000)
            }

            return {
                list,
                onLoad,
                loading,
                finished,
            }
        },
    }



</script>

<style>
.message-list-container .van-cell__value {
  text-align: center;
}

</style>

<style scoped>
.van-cell__value {
  text-align: center;
}

</style>