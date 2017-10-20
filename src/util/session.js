function setSessionItem(item, value){
  var itemVal = typeof value === 'object' ? JSON.stringify(value) : value
  sessionStorage.setItem(item,itemVal)
}
function getSessionItem(item) {
  var itemVal = sessionStorage.getItem(item);
  return DM.isJson(itemVal) ? JSON.parse(itemVal) : itemVal
}
function clearSession(){
  sessionStorage.clear()
}

function updateSession(info){
  sessionStorage.clear();
  for(var key in info){
    setSessionItem(key,info[key])
  }
}

export  {
  setSessionItem,
  updateSession,
  clearSession
}
