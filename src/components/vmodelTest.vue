<template>
    <div class="vmodel-test">
        <div @click="clickHandle">点击测试</div>
    </div>
</template>
<script>
    export default {
        methods:{
            clickHandle(e){
                console.log(this.value);
                this.$emit('change','iiiiiiiiiii');
                console.log('changed:',this.value);
                setTimeout(()=>{
                    console.log('timeout:',this.value);
                },0)
            }
        },
        props:{
            value:{
                type:String,
                value:'world'
            }
        },
        mounted(){
            this.$emit('input','skssskskss')
            // this.$emit('change','iiiiiiiiiii');
        }
    }
</script>
<style lang="less">
    .vmodel-test{
        div{
            height: 100px;
            width: 350px;
            border:5px solid #000;
            line-height: 100px;
            text-align: center;
        }
    }

</style>