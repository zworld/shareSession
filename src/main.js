// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from 'common/router'
import store from  'common/vuex'
import { initUser } from 'util/user'
import domain from 'util/domain'
import http from 'util/http'
import extend from 'util/extend'

//使用插件
Vue.use(extend)
Vue.use(domain)
Vue.use(http)

Vue.config.productionTip = false
initUser()

window.addEventListener('storage',function(e){
  if(e.key == 'user'){
    initUser()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
