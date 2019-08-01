<template>
    <div class="loadmore">
        <div class="loadmore-content" :style="translate" :class="{'is-dropped':dropped}">
            <slot name="top">
                <div>{{topText}}</div>
            </slot>
            <slot></slot>
            <slot name="bottom">
                <div>{{bottomText}}</div>
            </slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'my-loadmore',
        props:{
            topPullText:{
                type:String,
                default:'下拉刷新'
            },
            topLoadingText:{
                type:String,
                default:'加载中....'
            },
            topDropText:{
                type:String,
                default:'释放更新'
            },
            bottomPullText:{
                type:String,
                default:'上滑刷新'
            },
            bottomLoadingText:{
                type:String,
                default:'加载中....'
            },
            bottomDropText:{
                type:String,
                default:'释放更新'
            },
            topMethod:{
                type:Function,
                default:()=>{}
            },
            bottomMethod:{
                type:Function,
                default:()=>{}
            }
        },
        data(){
            return {
                startY:0,
                moveDistance:0,
                dropped:false,
                scrollTarget:null,
                topStatus:'pull',
                bottomStatus:'pull',
                topText:'下拉刷新',
                bottomText:'上滑刷新'
            }
        },
        computed:{
            translate(){
                return `transform:translate(0,${this.moveDistance}px)`;
            },

        },
        watch:{
            topStatus(val){
                switch(val){
                    case 'pull':
                        this.topText = this.topPullText;
                        break;
                    case 'loading':
                        this.topText = this.topLoadingText;
                        break;
                    case 'drop':
                        this.topText = this.topDropText;
                        break;
                }
            },
            bottomStatus(val){
                switch(val){
                    case 'pull':
                        this.bottomText = this.bottomPullText;
                        break;
                    case 'loading':
                        this.bottomText = this.bottomLoadingText;
                        break;
                    case 'drop':
                        this.bottomText = this.bottomDropText;
                        break;
                }
            }
        },
        methods:{
            onTopLoad(){
                setTimeout(()=>{
                    this.topStatus = 'pull';
                },200)
            },
            onBottomLoad(){
                setTimeout(()=>{
                    this.bottomStatus = 'pull';
                },200)
            },
            getScrollTarget(el){
                let node = null;
                while(el && el.tagName!=='HTML' && el.tagName!=='BODY' && el.nodeType==1){
                    let style = window.getComputedStyle(el);
                    if(style.overflowY == 'scroll' || style.overflowY=='auto'){
                        node = el;
                        break;
                    } else {
                        el = el.parentNode;
                    }
                }
                return node || window;
            },
            getTargetScrollTop(){
                if(this.scrollTarget == window) {
                    return document.documentElement.scrollTop || document.body.scrollTop;
                } else {
                    return this.scrollTarget.scrollTop;
                }
            },
            getTargetScrollBottomFlag(){
                let scrollTop = this.getTargetScrollTop();
                if(this.scrollTarget == window){
                    return scrollTop+document.documentElement.clientHeight>=document.documentElement.scrollHeight;
                } else {
                    return scrollTop + this.scrollTarget.clientHeight >= this.scrollTarget.scrollHeight;
                }
            },
            handleTouchStartEvent(e){
                this.startY = e.touches[0].clientY;
                this.dropped = false;
            },
            handleTouchMoveEvent(e){
                let currentY = e.touches[0].clientY;
                let distance = currentY-this.startY;
                // 判断是否在顶端或底部
                let scrollTop = this.getTargetScrollTop();
                let scrollBottom = scrollTop+document.documentElement.clientHeight;
                let topFlag = scrollTop===0;
                let bottomFlag = this.getTargetScrollBottomFlag();
                if(distance>=0){
                    // 下拉刷新
                    if(topFlag){
                        console.log('可以下拉刷新了')
                        this.topStatus = 'drop'
                        this.moveDistance = distance;
                    }
                } else {
                    // 上滑刷新
                    if(bottomFlag){
                        console.log('可以上滑刷新了');
                        this.bottomStatus = 'drop';
                        this.moveDistance = distance;
                    }
                }
            },
            handleToucheEndEvent(e){
                this.moveDistance = 0;
                this.dropped = true;
                if(this.topStatus!=='pull'){
                    this.topStatus = 'loading';
                    this.topMethod();
                }
                if(this.bottomStatus!=='pull'){
                    this.bottomStatus = 'loading';
                    this.bottomMethod();
                }
            },
            bindEvents(){
                this.$el.addEventListener('touchstart',this.handleTouchStartEvent);
                this.$el.addEventListener('touchmove',this.handleTouchMoveEvent);
                this.$el.addEventListener('touchend',this.handleToucheEndEvent);
            },
            init(){
                this.scrollTarget = this.getScrollTarget(this.$el);
                this.bindEvents();
            }
        },
        mounted(){
            this.init();
        }
    }
</script>
<style lang="less">
    .loadmore{
        .is-dropped{
            transition:.2s;
        }
    }

</style>