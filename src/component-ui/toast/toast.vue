<template>
    <transition name="toast">
        <div v-show="visible" :class="className">
            <span>{{message}}</span>
        </div>
    </transition>
</template>
<script>
    export default {
        name:'toast',
        props:{
            message:String,
            position:{
                type:String,
                default:'middle'
            }
        },
        computed:{
            className(){
                return `toast toast-${this.position}`;
            }
        },
        data(){
            return {
                visible:false
            }
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
        border-radius:10px;
        transition: opacity 1s linear;
        span{
            line-height:48px;
            font-size:32px;
            color:#fff;
        }
    }
    .toast-position{
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .toast-middle{
        top: 50%;
        &:extend(.toast-position);
    }
    .toast-bottom{
        &:extend(.toast-position);
        bottom: 100px;
        
    }
    .toast-top{
        &:extend(.toast-position);
        left:50%;
    }
    .toast-enter-active, .toast-leave-active {
      transition: opacity 1s;
    }
    .toast-enter, .toast-leave-to{
        opacity:0;
    }
</style>