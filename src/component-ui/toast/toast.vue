<template>
    <transition name="toast">
        <div class="toast">
            <span>我是一条信息</span>
        </div>
    </transition>
</template>
<script>
    export default {
        name:'toast',
        props:{
            message:String
        }
    }
</script>
<style lang="less">
    .toast{
        max-width:600px;
        min-width:240px;
        background-color:rgba(0,0,0,.6);
        padding:40px;
        box-sizing:border-box;
        font-size:0;
        display:inline-block;
        position:fixed;
        span{
            line-height:48px;
            font-size:32px;
            color:#fff;
        }
    }
</style>