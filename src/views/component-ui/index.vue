<template>
    <div class="ui-view">
        <h1>
            <router-link to="/show">{{componentName}}</router-link>
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
            let path = this.$route.path;
            let reg = /\/component-ui\/(\w+)/;
            this.componentName = path.match(reg)[1];
        }
    }
</script>
<style lang="less">
    .ui-view{
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
            /*padding:40px;*/
        }

  }
</style>
