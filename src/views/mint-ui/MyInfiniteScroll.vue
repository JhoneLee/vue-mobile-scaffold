<template>
    <div v-test="loadMore" class="my-infinite-scroll">
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-for="(item,i) in list" :key="i">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    import {InfiniteScroll} from 'mint-ui';
    import Vue from 'vue';
    import '@/components/test-plugin/plugin';
    // Vue.use(InfiniteScroll);
    export default {
        data(){
            return {
                list:[],
                loading:false
            }
        },
        created(){
            for(let i=0;i<20;i++){
                this.list.push((i+1)+'.'+Date.now());
            }
            console.log(this.list)
        },
        methods:{
            loadMore(){
                this.loading = true;
                setTimeout(() => {
                    let last = this.list.length - 1;
                    for (let i = 1; i <= 10; i++) {
                      this.list.push(`${last+i}.${Date.now()}`);
                    }
                    this.loading = false;
                }, 2500);
            }
        }
    }
</script>
<style lang="less">
    .my-infinite-scroll{

    }
</style>