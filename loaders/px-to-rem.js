/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-06-04 16:36:05
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-06-04 17:00:00
*/

const loaderUtils = require('loader-utils');
const schemaUtils = require('schema-utils');
module.exports = function(source){
    let opt = loaderUtils.getOptions(this) || {};
    console.log(opt);
    return source;
}