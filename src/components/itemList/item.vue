<template>
    <li class="item">
        <router-link to="/detail">
            <h1>{{data.title}}</h1>
            <div>{{data.content}}</div>
        </router-link>
    </li>
</template>
<script>
    export default {
        props:{
            data:Object
        }
    }

</script>
<style lang="less">
    .item{
        width:714px;
        border-bottom:2px solid #eee;
        padding:50px 0;
        h1{
            width:680px;
            color:#494949;
            font-size:34px;
            text-align:justify;
            font-weight:500;
            line-height:50px;
        }
        div{
            width:680px;
            margin-top:20px;
            height:108px;
            overflow:hidden;
            font-size:24px;
            line-height:36px;
            display:-webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            color:#aaa;
        }
    }
</style>