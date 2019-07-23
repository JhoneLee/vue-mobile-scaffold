<template>
    <div class="toast-page">
        <h1>I'am toast</h1>
        <button @click="testClick">点击试试</button>
    </div>
</template>
<script>
    import Toast from '@/component-ui/toast';
    export default {
        methods:{
            testClick(){
                Toast();
            }
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
