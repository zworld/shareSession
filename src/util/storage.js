/*
localStorage方法
 */

function setLsItem(item, value){
  var itemVal = typeof value === 'object' ? JSON.stringify(value) : value
  localStorage.setItem(item,itemVal)
}
function getLsItem(item) {
  var itemVal = localStorage.getItem(item);
  return DM.isJson(itemVal) ? JSON.parse(itemVal) : itemVal
}
function rmLsItem(item) {
  localStorage.removeItem(item)
}

function clearLs(){
  localStorage.clear()
}

function updateSession(info){
  sessionStorage.clear();
  for(var key in info){
    setSessionItem(key,info[key])
  }
}

export  {
  setLsItem,
  getLsItem,
  rmLsItem,
  clearLs
}

