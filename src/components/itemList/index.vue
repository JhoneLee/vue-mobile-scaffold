<template>
    <ul class="item-list">
        <Item v-for="(item,i) in itemList" :key="i" :data="item"/>
    </ul>
</template>
<script>
    import Item from './item';
    
    export default {
        components:{
            Item
        },
        props:{
            itemList:Array
        },
        data(){
            return {
                iscroll:null
            }
        },
        created(){
            
        },
        mounted(){
            
        }
    };
</script>
<style lang="less">
    .item-list{
        position: absolute;
        .item{
            margin-left: 36px;
        }
    }
</style>
