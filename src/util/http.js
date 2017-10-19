import axios from 'axios'
import config from "./config"
let xhrList = [];

exports.install = function (Vue) {

  Vue.prototype.$http = function (options) {
    let vm = this;
    //存入xhr列表
    let requestId = 'xhr_' + (Date.now() + xhrList.length);

    const defaultOpt = {
      method: 'get',
      responseType: 'json',
    };

    let opt = Object.assign({}, defaultOpt, options)

    if (!opt.url) return false;

    const params = opt.params || {};

    //增加token
    // if (vm.$store.state.user.info && vm.$store.state.user.info.token) {
    //   data.token = vm.$store.state.user.info.token;
    // }
    // data.id = ++id;
    if (opt.type === 'get') data.cath = new Date().getTime();

    if (opt.loading) vm.$eventHub.$emit('event_loading', true);

    //设置请求id，用于取消请求
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();

    //发送请求
    var request = axios({
      cancelToken: source.token,
      url: config.serverUrl + opt.url,
      params: params,
      method: 'post',
      responseType: opt.responseType,
    })
      .then(function (res) {
        let resData = res.data;
        let data = resData.data;
        let code = resData.code;
        if (code == -100) { //登录失败认证

          //停止正在运行的ajax
          Vue.stopAjax();

          //会话过期判断
          vm.$store.dispatch('logout');
          vm.$router && vm.$router.push('/error/用户登录异常/' + res.message);

        } else if (code == '-200') { //权限认证


        } else if (res.code <= 0) { //发生错误
          if (opt.error) {
            opt.error(data.message);
          } else {
            vm.$tip.warning(data.message);
          }
        } else {
          return Promise.resolve(data)
        }
      })
      .catch(function (e) {
        return Promise.reject(e)
      });
    xhrList.push(source);
    return request
  }

  //停止ajax请求
  Vue.stopHttps = function () {
    while (xhrList.length) {
      let source = xhrList.pop()
      source.cancel()
    }
  }
}
