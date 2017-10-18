function sessionItem(...args) {
  let len = args.length;
  let [key,value] = args
  if(len==2) sessionStorage.setItem(key,value)
  return sessionStorage.getItem(key)
}

export  {
  sessionItem
}
