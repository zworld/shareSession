/**
 * Created by zhongxinzhi on 2017/10/19.
 */
let domain = {};
domain.isJson = function (value) {
  try {
    JSON.parse(value)
    return true
  } catch (e) {
    return false
  }
}
domain.getObjLen = function(obj){
  return Object.keys(obj).length
}
const install = function (Vue) {
  window.DM = domain
}
export default install
