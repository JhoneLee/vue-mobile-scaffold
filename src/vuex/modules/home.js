/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-06-12 14:49:56
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-06-18 16:33:16
*/

export default {
    state:{
        homeItemList:['e','f','g']
    },
    getter:{
        getHomeItemList(state){
            return state.itemList;
        }
    },
    actions:{
        homeItemListActions({commit}){
            console.log('actions')
            commit('itemListMutations',[4,5,6]);
        }
    },
    mutations:{
        homeItemListMutations(state,arr=[1,2,3]){
            console.log('itemListMutations:',state,arr);
            state.itemList = arr;
        }
    }
}