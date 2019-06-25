<template>
    <div class="home">
        <Header></Header>
        <div class="content">
            <ItemList :itemList="itemList"/>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/header';
    import ItemList from '@/components/itemList';
    import Iscroll from 'iscroll';
    import {mapActions,mapMutations,mapGetters} from 'vuex';
    export default {
        name:'home',
        components:{
            Header,
            ItemList
        },
        methods:{
            ...mapActions(['getData']),
        },
        computed:{
            ...mapGetters(['itemList'])
        },
        mounted(){
            console.log(this.$store.state)
        },
        created(){
            this.getData({
                api:'homelist',
                param:{
                    pageNo:1,
                    pageNum:10
                },
                type:'h5home',
                timeout:300000
            });
        },
        mounted(){
            this.iscroll = new Iscroll('.content');
        }
    }
</script>
<style lang="less">
    .home{
        .header{
            top:-1px;
            z-index:999;
        }
        .content{
            margin-top:100px;
            position:relative;
        }
    }
</style>