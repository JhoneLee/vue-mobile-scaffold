<template>
    <div class="loadmore">
        <div class="loadmore-content" :style="translate" :class="{'is-dropped':dropped}">
            <slot name="top">
                <div>Top</div>
            </slot>
            <slot></slot>
            <slot name="bottom">
                <div>bottom</div>
            </slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'my-loadmore',
        data(){
            return {
                startY:0,
                moveDistance:0,
                dropped:false
            }
        },
        computed:{
            translate(){
                return `transform:translate(0,${this.moveDistance}px)`;
            },

        },
        methods:{
            handleTouchStartEvent(e){
                this.startY = e.touches[0].clientY;
                this.dropped = false;
            },
            handleTouchMoveEvent(e){
                let currentY = e.touches[0].clientY;
                let distance = currentY-this.startY;
                this.moveDistance = distance;
                if(distance>=0){
                    // 向下滑动

                } else {
                    // 向上滑动

                }
            },
            handleToucheEndEvent(e){
                this.moveDistance = 0;
                this.dropped = true;
            },
            bindEvents(){
                this.$el.addEventListener('touchstart',this.handleTouchStartEvent);
                this.$el.addEventListener('touchmove',this.handleTouchMoveEvent);
                this.$el.addEventListener('touchend',this.handleToucheEndEvent);
            },
            init(){
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
            transition: 10s;
        }
    }

</style>