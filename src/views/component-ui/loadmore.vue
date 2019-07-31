<template>
    <div class="loadmore-page">
        <my-loadmore>
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
            
        },
        created(){
            
        },
        mounted(){
            
        }
    }

</script>
<style lang="less">
    .loadmore-page{
        .my-loadmore-content{
            height: 1500px;
            background: red;
        }
    }
</style>