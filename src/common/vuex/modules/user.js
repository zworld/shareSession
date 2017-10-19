import * as types from '../mutation-types'

const state = {
  isLogin: false,
  userId: '',
  sessionId: ''
}
const getters = {}
const mutations = {
  [types.UPDATE_USER]: function (state, userInfo) {
    for (var key in userInfo) {
      state.user[key] = userInfo[key]
    }
  }
}
const actions = {}
export default {
  state,
  getters,
  mutations,
  actions
}
