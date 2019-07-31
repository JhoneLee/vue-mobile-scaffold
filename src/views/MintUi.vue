<template>
    <div class="mint-ui-view">
        <h1>mint-ui Components</h1>
        <ul>
            <li v-for="(item,i) in lists" :key="i">
                <router-link :to="item.href">{{i+1}}.{{item.value}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'mintUi',
        data(){
            return {
                lists:[{
                    href:'/mint-ui-wrapper/loadmore',
                    value:'Loadmore-show'
                }]
            }
        }
    }
</script>
<style lang="less">
    .mint-ui-view{
        width:100%;
        h1{
            height: 120px;
            text-align: center;
            line-height:120px;
            font-size: 48px;
            background:#eee;
        }
        ul{
            li{
                padding-left:40px;
                font-size:40px;
                height:80px;
                line-height:80px
            }
        }
    }
</style>