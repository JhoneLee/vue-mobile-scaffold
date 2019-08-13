<template>
    <div class="mint-ui-view">
        <h1>mint-ui Components</h1>
        <ul>
            <li v-for="(item,i) in lists" :key="i">
                <router-link :to="item.path">{{i+1}}.{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import router from '@/router';
    export default {
        name:'mintUi',
        data(){
            return {
                lists:[]
            }
        },
        created(){
            let {routes} = router.options;
            let cui = {};
            for(let i=0;i<routes.length;i++){
                let item = routes[i];
                if(item.path=='/mint-ui-wrapper'){
                    cui = item;
                    break;
                }
            }
            for(let j=0;j<cui.children.length;j++){
                let {path,name} = cui.children[j];
                this.lists.push({
                    path:`/mint-ui-wrapper/${path}`,
                    name
                })
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