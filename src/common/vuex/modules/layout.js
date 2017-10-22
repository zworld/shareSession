import * as types from '../mutation-types'
const state = {
  //菜单状态
 menuIn: false
}
const getters = {

layout: (state, getters, rootState) => {
    return {
      //没有头部
      noHeader: rootState.route.meta.noHeader || false,
      //没有菜单
      noMenu: rootState.route.meta.noMenu || false,
    }
  }
}
const mutations = {
  [types.MENU_TOGGLE]: function(state){
      state.menuIn = !state.menuIn
  }
}

export default {
  state,
  getters,
  mutations
}
