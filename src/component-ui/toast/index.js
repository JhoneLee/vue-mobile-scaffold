/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-07-23 16:30:21
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-07-24 15:19:59
*/

import toast from './toast.vue';
import Vue from 'vue';

let ToastComponent = Vue.extend(toast);

function Toast(opt={}){
    let instance = new ToastComponent();
    let dom = document.createElement('div');
    let toastdom = instance.$mount(dom);
    console.log(toastdom.$el);
    document.body.appendChild(toastdom.$el);
    return instance;
}

export default Toast;


