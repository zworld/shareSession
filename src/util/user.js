import store from 'common/vuex'
import {updateSession} from 'util/session'
import { setLsItem, getLsItem, rmLsItem} from 'util/storage'
//初始化用户,把用户信息赋值给vuex user
const initUser = function () {

  if (!sessionStorage.length) {
    // Ask other tabs for session storage
    localStorage.setItem('getSessionStorage', Date.now());
  }else{
    //本地赋值
    store.dispatch('update', sessionStorage)
  };

  window.addEventListener('storage', function(event) {

    //传递值处理
    var data = DM.isJson(event.newValue) ? JSON.parse(event.newValue) : event.newValue;

    if (event.key == 'getSessionStorage') {data
      // Some tab asked for the sessionStorage -> send it
      dispatchSession()

    } else if ((event.key === 'sessionStorage' && !Object.is(null,) &&!sessionStorage.length)) {

      if(DM.getObjLen(data) === 0) return

      updateUser()

    }else if(event.key === 'updateStorage'){
      if(typeof data === 'object'){
        //更新用户
        updateUser()
      }
    }
  });

}

//获取用户信息
const getUserInfo = function(){
  return store.state.user.userInfo || {}
}
//更新用户
const updateUser = function (userInfo) {
  //更新sessionStorage,本地赋值
  updateSession(data)
  store.dispatch('update', data)
}
//同步传递session
const dispatchSession = function(){
  setLsItem('sessionStorage', sessionStorage);
  rmLsItem('sessionStorage');
}

//传递用户更新信息
const dispatchUserInfo = function(){
  setLsItem('updateStorage', sessionStorage)
  setLsItem('updateStorage',Date.now())
}

export  {
  initUser,
  updateUser,
  dispatchUserInfo
}

