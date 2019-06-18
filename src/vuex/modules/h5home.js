/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-06-18 16:03:15
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-06-18 16:40:18
*/

export default {
    state:{
        itemList:[]
    },
    getters:{
        itemList(state){
            return state.itemList;
        }
    },
    mutations:{
        h5home_success(state,json){
            state.itemList = json.data;
        },
        h5home_error(state,error){
            state.itemList = [];
        }
    }
}