import store from 'common/vuex'
import {sessionItem} from './session'
import {storageItem} from './storage'
//初始化用户,把用户信息赋值给vuex user
const initUser = function () {

  if (!sessionStorage.length) {
    // Ask other tabs for session storage
    localStorage.setItem('getSessionStorage', Date.now());
  }else{
    //用户赋值
    store.commit('UPDATE_USER', data)
  };

  window.addEventListener('storage', function(event) {

    if (event.key == 'getSessionStorage') {
      // Some tab asked for the sessionStorage -> send it

      console.info(JSON.stringify(sessionStorage),123123);

      localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
      localStorage.removeItem('sessionStorage');

    } else if (event.key == 'sessionStorage' && !sessionStorage.length) {

      var data = JSON.parse(event.newValue);

      for (var key in data) {
        sessionStorage.setItem(key, data[key]);
      }
      //用户赋值
      store.commit('UPDATE_USER', data)
    }
  });


  // if (sessionItem('user')) {
  //   var userInfo = JSON.parse(sessionItem('user'))
  //   store.commit('UPDATE_USER', userInfo)
  // }
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

