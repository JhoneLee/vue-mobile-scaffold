<template>
    <div class="toast-page">
        <h1>I'am toast</h1>
        <button @click="testClick">点击试试</button>
    </div>
</template>
<script>
    import Toast from '@/component-ui/toast';
    let time = 0;
    export default {
        methods:{
            testClick(){
                Toast({
                    message:`${time}次点击触发消息弹出`
                });
                time++;
            }
        },
        created(){
            let toast = Toast({
                message:'初始化了组件'
            });
            console.log('kkkkkk',toast,toast.$el);
        },
        mounted(){
            let toast = Toast({
                message:'组件mounted'
            });
            console.log('sssssss',toast,toast.$el);
        }
    }

</script>
<style lang="less">
    .toast-page{
        button{
            border:2px solid black;
            width: 180px;
            height: 60px;
            font-size: 40px;
            line-height: 60px;
            text-align: center;
        }
    }
</style>
