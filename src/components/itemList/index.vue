<template>
    <ul class="item-list">
        <Item v-for="(item,i) in list">{{i}}</Item>
    </ul>
</template>
<script>
    import Item from './item';
    export default {
        components:{
            Item
        },
        data(){
            return {
                list:[1,2,3,4,5]
            }
        },
        created(){
            
        }
    };
</script>
<style>
    .item-list{

    }
</style>
