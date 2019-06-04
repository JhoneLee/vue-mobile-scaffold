/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-06-04 13:50:27
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-06-04 14:44:05
*/

class Px2rem {
    constructor(opt){
        this.options = opt;
    }
    apply(compiler){
        // compiler.hooks.entryOption.tap('entryOption',(...param)=>{
        //     console.log('entry 配置项 处理过之后触发',param);
        // })

        // compiler.hooks.beforeCompile.tapAsync('emit hook',(compilation,callback)=>{
        //     // console.log('emit hook:',compilation);
        //     Object.keys(compilation).forEach((e)=>{
        //         console.log('compilation key:',e);
        //     });
        //     callback();
        // });
    }
}

module.exports = Px2rem;