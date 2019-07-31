import Vue from 'vue'
import Router from 'vue-router'
import H5index from './views/h5index.vue'
import Show from './views/Show.vue'
import componentUi from './views/component-ui/index.vue'
import MintUi from './views/MintUi.vue'
import MintUiWrapper from './views/mint-ui/index.vue'

// component-ui组件
import Toast from './views/component-ui/toast';
import Loadmore from './views/component-ui/loadmore';
// mint-ui 组件
import MyLoadmore from './views/mint-ui/MyLoadmore';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: H5index
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    },
    {
      path:'/component-ui',
      name:'componentUi',
      component:componentUi,
      children:[
        {
          path:'toast',
          name:'Toast',
          component:Toast
        },{
          path:'loadmore',
          name:'Loadmore',
          component:Loadmore
        }
      ]
    },
    {
      path:'/mint-ui',
      name:'mintUi',
      component:MintUi
    },
    {
      path:'/mint-ui-wrapper',
      component:MintUiWrapper,
      children:[
        {
          path:'loadmore',
          component:MyLoadmore
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

export default router;
