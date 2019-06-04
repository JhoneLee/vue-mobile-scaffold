/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-06-03 12:42:56
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-06-04 16:45:48
*/
var path = require('path');
var Px2rem = require(path.resolve(__dirname,'./webpackPlugins/px2rem'));
var ViewCompilerHooks = require('./webpackPlugins/viewCompilerHooks');
module.exports = {
    configureWebpack:{
        plugins:[
            new ViewCompilerHooks()
        ],
        resolveLoader:{
            modules:[path.resolve(__dirname,'./loaders'),'node_modules']
        },
        module:{
            rules:[{
                test:/\.vue$/,
                use:[{
                    loader:'px-to-rem',
                    options:{
                        rem:75,
                        fontSize2Rem:true
                    }
                }]
            }]
        }
    }
}