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
        created(){
            
        }
    };
</script>
<style>
    .item-list{

    }
</style>
