import * as types from '../mutation-types'

const state = {
  isLogin: false,
  userInfo: {}
}
const getters = {}
const mutations = {

  //更新用户信息
  [types.UPDATE_USER]: function (state, userInfo) {
    for(var key in userInfo){
      var value = userInfo[key]
      state[key] = DM.isJson(value) ? JSON.parse(value) : value
    }
  },

  //改变登录状态
  [types.CHANGE_LOGIN]: function (state, loginState) {
    state.isLogin = loginState || false
  },

  //重置用户信息
  [types.REST_USER]: function(state){
    state.isLogin = false;
    for(var key in state){
      if(typeof state[key] == 'object'){
        state[key] = {}
      }
    }
  },
}
const actions = {
  update: function ({commit, state}, info) {

    var userInfo = info || {};

    if (Object.keys(userInfo).length == 0) {
      commit(types.REST_USER)
    } else {
      commit(types.CHANGE_LOGIN, true)
      commit(types.UPDATE_USER, info)
    }
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
