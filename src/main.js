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
import {sync} from 'vuex-router-sync'

//lodash
require(['lodash/core'],function (lodash) {
  window._ = lodash
});

/*
按需求引入element组件
 */
import needElComponents from 'components/element'

import 'assets/css/common'

//使用插件
Vue.use(needElComponents)
Vue.use(extend)
Vue.use(domain)
Vue.use(http)

//同步store和router状态，layout布局
sync(store, router)

Vue.config.productionTip = false

//初始化用户信息，同步session和vuex user,并且添加storage相关事件
initUser()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
