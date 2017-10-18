//localStorage方法
function storageItem(...args) {
  let len = args.length;
  let [key,value] = args
  if(len==2) localStorage.setItem(key,value)
  return localStorage.getItem(key)
}
export {
  storageItem
}
