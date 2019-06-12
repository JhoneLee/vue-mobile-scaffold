/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-06-12 14:49:56
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-06-12 15:02:15
*/

export default {
    state:{
        itemList:['e','f','g']
    },
    getter:{
        getItemList(state){
            return state.itemList;
        }
    },
    actions:{
        itemListActions({commit}){
            console.log('actions')
            commit('itemListMutations',[4,5,6]);
        }
    },
    mutations:{
        itemListMutations(state,arr=[1,2,3]){
            console.log('itemListMutations:',state,arr);
            state.itemList = arr;
        }
    }
}