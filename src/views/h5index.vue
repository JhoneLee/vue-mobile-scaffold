<template>
    <div class="home">
        <Header></Header>
        <div class="content">
            <ItemList/>
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
            ...mapActions(['itemListActions']),
            ...mapMutations(['itemListMutations']),
            storeCommit(){
                this.$store.commit('itemListMutations',['l','m','n'])
            }
        },
        computed:{
            ...mapGetters(['itemList'])
        },
        mounted(){
            console.log(this.$store.state)
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