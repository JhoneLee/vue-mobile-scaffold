/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-06-12 14:03:30
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-06-12 14:53:22
*/

import Vue from 'vue';
import Vuex from 'vuex';
import modules from '../modules';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemList:['a','b','c']
  },
  modules
});
