<template>
    <div class="my-range">
        <h1>MyRange</h1>
        <mt-range
            
            :min="0"
            :max="90"
            :step="10"
            :bar-height="5"
            :value="20">
        </mt-range>
        <vmodel-test v-model="testValue" @change="handleChange"></vmodel-test>
    </div>
</template>
<script>
    import {Range} from 'mint-ui';
    import "mint-ui/lib/style.css";
    import vmodelTest from '@/components/vmodelTest';
    export default {
        components:{
            'mt-range':Range,
            'vmodel-test':vmodelTest
        },
        data(){
            return {
                rangeValue:0,
                testValue:'hello'
            }
        },
        mounted(){
            // Range.$on('input',(val)=>{
            //     console.log('input:',val);
            // });
            
        },
        methods:{
            handleChange(...val){
                console.log('father com change event:',val);
                this.testValue = val[0]
            }
        }
    }
</script>
<style lang="less">
    .my-range{
        h1{
            margin-bottom: 40px;
        }
    }
</style>