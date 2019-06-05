<template>
    <div class="home">
        <Header></Header>
    </div>
</template>
<script>
    import Header from '@/components/header';
    export default {
        name:'home',
        components:{
            Header
        }
    }
</script>
<style lang="less">
    .home{
        h1{
            color:red;
        }
    }
</style>