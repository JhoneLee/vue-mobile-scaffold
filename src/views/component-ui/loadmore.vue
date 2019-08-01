<template>
    <div class="loadmore-page">
        <my-loadmore ref="loadmore" :topMethod="topLoadMethod" :bottomMethod="bottomLoadMethod">
            <h1 class="my-loadmore-content">握草</h1>
        </my-loadmore>
    </div>
</template>
<script>
    import Loadmore from '@/component-ui/loadmore';
    export default {
        components:{
            'my-loadmore':Loadmore
        },
        methods:{
            topLoadMethod(){
                this.$refs.loadmore.onTopLoad()
            },
            bottomLoadMethod(){
                this.$refs.loadmore.onBottomLoad()
            }
        },
        created(){
            
        },
        mounted(){
            
        }
    }

</script>
<style lang="less">
    .loadmore-page{
        overflow: hidden;
        overflow-y:auto;
        height:1000px;
        .my-loadmore-content{
            height: 2500px;
            background: linear-gradient(red,blue);
        }
    }
</style>