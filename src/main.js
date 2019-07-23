import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import fastclick from 'fastclick'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

fastclick.attach(document.body);


// 组件test

let Profile = Vue.extend({
    template:`
        <div>
            <h1>{{title}}</h1>
        </div>
    `,
    data(){
        return {
            title:'test component'
        }
    }
});
// 构造一个无名称的组件
// new Profile()   即可以调用组件

Vue.component('my-component',{
    template:`
        <div>
            <h1>{{title}}</h1>
        </div>
    `,
    data(){
        return {
            title:'test component'
        }
    }
});

// 获取组件构造函数
let myComponent = Vue.component('my-component');
// 无法使用
// new myComponent() 可用
// console.log('xxxxx',new myComponent());