import Vue from 'vue'
import Router from 'vue-router'
import index_page from 'page/index'
import login_page from 'page/login'
import store from '@/vuex'
Vue.use(Router)
var router =  new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index_page,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login_page
    }
  ]
})

router.beforeEach((to, from, next) => {
  let needAuth = to.meta.requiresAuth;
  let isLogin = store.state.user.isLogin;
  let pathName = to.name;
  if(needAuth){
    if(isLogin || pathName=='login'){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})
export default router