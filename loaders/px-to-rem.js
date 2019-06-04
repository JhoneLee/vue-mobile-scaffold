/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-06-04 16:36:05
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-06-04 17:00:00
*/

const loaderUtils = require('loader-utils');
const schemaUtils = require('schema-utils');
module.exports = function(source){
    const regGetStyle = /(\d+px)/;
    let opt = loaderUtils.getOptions(this) || {};
    let arr = source.split(regGetStyle);
    let handleSource = '';
    const regMatchPx = /(\d+)px/;
    arr.forEach((e)=>{
        if(regMatchPx.test(e)){
            let px = e.match(regMatchPx)[1];
            let rem = px2rem(px,opt.rem);
            handleSource+=rem;
        } else {
            handleSource+=e;
        }
    });
    // console.log(opt);
    return handleSource;
}

function px2rem(px,base){
    return (px/base).toFixed(4)+'rem';
}