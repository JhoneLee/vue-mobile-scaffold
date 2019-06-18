/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-06-18 15:32:50
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-06-18 16:31:12
*/

import request from 'superagent';
import {judgeType} from './tools';
const baseUrl = 'http://localhost:8686/api/vms'
export default function requestData(commit,params){
    let {api,param,timeout=3000,type="common"} = params;
    request.post(`${baseUrl}/${api}`)
           // .withCredential()
           .send(param)
           .set('Content-Type', 'application/x-www-form-urlencoded')
           .set('Accept', 'application/json')
           // .use(noCache)
           .timeout({
                deadline:timeout
            })
           .then((response)=>{
                return response.body || JSON.parse(response.text);
            },(error)=>{
                console.log(error);
                // 隐藏loding
                commit(`${type}_error`,error);
            }).then((json)=>{
                if(json){
                    if(judgeType(json) == 'object' && json.status == 0){
                        // 请求成功
                        commit(`${type}_success`,json);
                    } else if(judgeType(json) == 'object' && json.status == 2){
                        console.log('鉴权失败');
                        commit(`${type}_error`,error);
                    } else {
                        // 请求成功，但是接口返回错误
                        // !notmsg && message.error('数据错误');
                        commit(`${type}_error`,error);
                    }
                }
            }).catch(err => {
                // 捕捉其他一切未知错误
                commit(`${type}_error`,error);
                console.log('getData catch',err);
            });
}