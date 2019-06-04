/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-06-04 14:43:02
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-06-04 15:31:52
*/

class ViewCompilerHoosk {
    constructor(){

    }
    apply(compiler){
        // compiler.hooks.entryOption.tap('entryOption',(...param)=>{
        //     console.log('entry 配置项 处理过之后触发',param);
        // });

        // compiler.hooks.afterPlugins.tap('afterPlugins',(...param)=>{
        //     // param 为 compiler自身
        //     console.log('设置完初始插件之后，执行插件',param);
        // });

        // compiler.hooks.environment.tap('environment',(...param)=>{
        //     // 参数为空
        //     console.log('准备好之后，执行插件。',param);
        // });

        // compiler.hooks.normalModuleFactory.tap('normalModuleFactory',(...params)=>{
        //     console.log('NormalModuleFactory 创建之后，执行插件',params);
        // });

        // compiler.hooks.thisCompilation.tap('thisCompilation',(compilation)=>{
        //     console.log('触发 compilation 事件之前执行:',compilation.assets);
        // });

        compiler.hooks.make.tapAsync('make',(compilation,cb)=>{
            console.log('make 过程',compilation.modules);
            cb();
        });
    }
}

module.exports = ViewCompilerHoosk;