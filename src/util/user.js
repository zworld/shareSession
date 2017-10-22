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

    //获取传递值
    var data = DM.isJson(event.newValue) ? JSON.parse(event.newValue) : event.newValue;

    if (event.key == 'getSessionStorage') {data
      // Some tab asked for the sessionStorage -> send it
      dispatchSession()

    } else if ((event.key === 'sessionStorage' && !Object.is(null,data) &&!sessionStorage.length)) {

      if(DM.getObjLen(data) === 0) return
      //更新用户信息
      updateUser()

    }else if(event.key === 'updateStorage'){
      if(typeof data === 'object'){
        //更新用户
        updateUser()
      }
    }
  });

}

//更新用户,让本地和sessionStorage同步
const updateUser = function (userInfo) {
  updateSession(data)
  store.dispatch('update', data)
}
//传递sessionStorage,用于首次登录并且没有sessionStorage的新tab
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

