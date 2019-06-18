/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-06-18 15:51:24
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-06-18 15:51:44
*/


export function judgeType(param) {
    if(param === null){
        return 'null';
    }
    let str = Object.prototype.toString.call(param);
    let reg = /^\[\w+\s(\w+)\]$/;
    let type = str.match(reg)[1];
    return type.toLowerCase();
}