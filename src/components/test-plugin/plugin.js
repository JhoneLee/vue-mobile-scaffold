import Vue from 'vue';
const obj = {
    bind(...params){
        console.log('自定义指令:',params);
    },
    inserted(el){
        console.log('指令绑定元素：',el);
    }
}


Vue.directive('test',obj);