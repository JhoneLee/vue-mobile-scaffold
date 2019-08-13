<template>
    <div class="my-swipe">
        <my-swipe :auto="4000">
            <my-swipe-item>1</my-swipe-item>
            <my-swipe-item>2</my-swipe-item>
            <my-swipe-item>3</my-swipe-item>
        </my-swipe>
    </div>
</template>
<script>
    import Vue from 'vue';
    import {Swipe,SwipeItem} from 'mint-ui';
    import "mint-ui/lib/style.css"
    // Vue.component(Swipe.name, Swipe);
    // Vue.component(SwipeItem.name, SwipeItem);
    export default {
        components:{
            'my-swipe':Swipe,
            'my-swipe-item':SwipeItem
        }
    }
</script>
<style lang="less">
    .my-swipe{
        height: 600px;
        background: red;
        .mint-swipe{
            border:5px solid green;
        }
    }
</style>