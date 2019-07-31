<template>
    <div class="mint-ui-wrapper">
        <h1>
            <router-link to="/mintUi">{{componentName}}</router-link>
        </h1>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>
<script>
    export default {
        name:'componentUi',
        data(){
            return {
                componentName:''
            }
        },
        created(){
            console.log(this.$route)
            let path = this.$route.path;
            let reg = /\/mint-ui-wrapper\/(\w+)/;
            this.componentName = path.match(reg)[1];
        }
    }
</script>
<style lang="less">
    .mint-ui-wrapper{
        >h1{
            height:80px;
            line-height:80px;
            font-size:40px;
            text-align:center;
            background:#eee;
            a{
                color:black;
            }
        }
        .content{
            padding:0px;
        }
    }

</style>