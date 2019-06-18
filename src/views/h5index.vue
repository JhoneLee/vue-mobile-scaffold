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
        }
    }
</script>
<style lang="less">
    .home{
        .header{
            top:0;
        }
        h1{
            color:red;
        }
        .content{
            margin-top:94px;
        }
    }
</style>