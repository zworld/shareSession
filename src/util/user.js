import store from '@/vuex'
import {sessionItem} from './session'
import {storageItem} from './storage'
//初始化用户,把用户信息赋值给vuex user
const initUser = function () {
  if (sessionItem('user')) {
    var userInfo = JSON.parse(sessionItem('user'))
    store.commit('UPDATE_USER', userInfo)
  }
}
//更新用户 把用户信息同步更新到session和localStorage
const updateUser = function (userInfo) {
  var newInfo = typeof userInfo === 'string' ? userInfo : JSON.stringify(userInfo)
  sessionItem('user', newInfo)
  storageItem('user', newInfo)
}
export  {
  initUser,
  updateUser
}

