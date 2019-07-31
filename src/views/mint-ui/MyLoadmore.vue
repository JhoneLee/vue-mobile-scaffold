<template>
    <div class="my-load-more">
        <mt-loadmore :autoFill="true" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @top-status-change="handleTopStatusChange" ref="loadmore">
            <ul>
                <li :key="item" v-for="item in list">{{ item }}</li>
            </ul>
            <!-- <div slot="top" class="mint-loadmore-top">
              <span v-show="topStatus !== 'loading'" :class="className">↓</span>
              <span v-show="topStatus === 'loading'">Loading...</span>
            </div>
            <div slot="bottom" class="mint-loadmore-top">
              <span v-show="topStatus !== 'loading'" :class="className">↓</span>
              <span v-show="topStatus === 'loading'">Loading...</span>
            </div> -->
        </mt-loadmore>
    </div>
</template>
<script>
    // import {Loadmore} from 'mint-ui';
    import Loadmore from '@/components/loadmore';
    export default {
        components:{
            'mt-loadmore':Loadmore
        },
        methods:{
            loadTop(){
                this.makeData(true);
                this.$nextTick(()=>{
                    this.$refs.loadmore.onTopLoaded();
                });
            },
            loadBottom(){
                // console.log('bottom',this.allLoaded,this.loadTime);
                let loadmore = this.$refs.loadmore;
                
                this.makeData();
                this.$refs.loadmore.onBottomLoaded();
                this.$nextTick(()=>{
                    console.log('上来就执行',document.documentElement.getBoundingClientRect().bottom,loadmore.$el.getBoundingClientRect().bottom,loadmore.containerFilled,loadmore.bottomAllLoaded);
                })
            },
            makeData(update){
                if(update){
                    let len = this.list.length
                    this.list = [];
                    for(let i=0;i<len;i++){
                        this.list[i] = `${i+1}.${Date.now()}`;
                    }
                } else {
                    // console.log(this.loadTime);
                    if(this.loadTime<=3){
                        let len = this.list.length;
                        for(let j=len;j<len+10;j++){
                            this.list.push(`${j+1}.${Date.now()}`);
                        }
                        this.loadTime++;
                    } else {
                        this.allLoaded = true;
                    }
                }
            },
            handleTopStatusChange(e){
                // console.log('handleTopStatusChange:',e);
                this.topStatus = e;
            }
        },
        data(){
            return {
                list:[],
                allLoaded:false,
                loadTime:0,
                topStatus:'drop',
                startYNumber:0,
                distance:0
            }
        },
        computed:{
            className(){
                return this.topStatus=='drop'?'rotate':'';
            }
        },
        created(){
            for(let i=0;i<20;i++){
                this.list.push(`${i+1}.${Date.now()}`);
            }
            
        },
        mounted(){
            let loadmore = this.$refs.loadmore;
            this.$nextTick(()=>{
                console.log('init:',document.documentElement.getBoundingClientRect().bottom,loadmore.$el.getBoundingClientRect().bottom,loadmore.containerFilled,loadmore.bottomAllLoaded);

                console.log('scrollEventTarget:',loadmore.scrollEventTarget)

                let _this = this;
                // loadmore.$el.addEventListener('touchstart',function(e){
                //     console.log('start:',e.touches[0].clientY,this);
                //     _this.startYNumber = e.touches[0].clientY;
                // });
                // loadmore.$el.addEventListener('touchmove',function(e){
                //     let currentY = e.touches[0].clientY;
                //     _this.distance = currentY-_this.startYNumber;
                //     console.log('move:',currentY-_this.startYNumber)
                // });
            });
        }
    }
</script>
<style lang="less">
    .my-load-more{
        /*overflow:hidden;
        overflow-y: auto;*/
        /*&::-webkit-scrollbar{
            display: none;
            width: 0;
        }*/
        .mint-loadmore-top{
            span{
                display:inline-block;
            }
            .rotate{
                transform:rotate(180deg);
            }
        }
    }
</style>