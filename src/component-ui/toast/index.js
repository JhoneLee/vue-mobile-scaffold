/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-07-23 16:30:21
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-07-25 16:20:59
*/

import toast from './toast.vue';
import Vue from 'vue';

let ToastComponent = Vue.extend(toast);

let toastPool = [];

ToastComponent.prototype.close = function(){
    this.visible = false;
    // transitionend 事件会被触发两次，淡入一次淡出一次，所以需要在close方法中现绑
    this.$el.addEventListener('transitionend', removeDom);
    toastPool.push(this);
};



function getInstance(){
    if(toastPool.length){
        let instance = toastPool.splice(0,1)[0];
        return instance;
        
    } else {
        return new ToastComponent();
    }
}

function removeDom(event){
    console.log('删除了dom')
    // 此操作只更改dom树，并不删除instance.$el
    event.target.parentNode.removeChild(event.target);
}


function Toast(opt={}){
    let createTime = Date.now();
    let instance = getInstance();
    // instance 初始化
    instance.visible = false;
    clearTimeout(instance.timer);
    // 创建dom并绑定组件
    let dom = document.createElement('div');
    let toastdom = instance.$mount(dom);
    toastdom.$el.removeEventListener('transitionend',removeDom);
    // 赋予组件属性
    let {position,message} = opt;
    instance.position = position || 'middle';
    instance.message = message || '未填写任何信息';
    // vue的淡入淡出需要配合v-show使用
    // 所以通过操控instance.visible实现淡入淡出效果
    instance.visible = true;
    document.body.appendChild(toastdom.$el);
    // 为避免不必要的麻烦，在操作一次dom之后，后续的dom操作应该放在nextTick中，防止vue dom树未更新导致的出错
    // 本例中close 中触发removeDom，要操作dom
    Vue.nextTick(()=>{
        console.log('nextTick后',toastdom.$el.innerHTML)
        instance.timer = setTimeout(()=>{
            instance.close();
        },3000);
    });
    
    

    // 返回实例
    return instance;
}

export default Toast;

