/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-06-18 14:32:50
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-06-18 16:30:39
*/

import req from '@/utils/request'
export default function getData({commit},params){
    req(commit,params);
}