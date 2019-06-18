<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="content">
        {{$store.state.home.getHomeItemList.join(',')}}
        <a @click="storeCommit" style="width:200px;height: 60px;font-size: 28px;">点击试试</a>
        <a @click="itemListActions" style="width:200px;height: 60px;font-size: 28px;">点击试试</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapGetters,mapActions,mapMutations} from 'vuex';
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    ...mapActions(['homeItemListActions']),
    ...mapMutations(['homeItemListMutations']),
    storeCommit(){
        this.$store.commit('homeItemListMutations',['l','m','n'])
    }
  },
  computed:{
    ...mapGetters(['getHomeItemList'])
  },
  mounted(){
    console.log(this.$store.state)
  }
}
</script>
