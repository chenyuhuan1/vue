/* 获取sessionStore */
export function getSession (key) { 
  return JSON.parse(sessionStorage.getItem(key));
}

/* 设置sessionStore */
export function setSession (key,value) { 
  if (typeof value != 'string') {
    value = JSON.stringify(value);
  }
  sessionStorage.setItem(key,value);
}

/* 清除sessionStore */
export function removeSession (key) { 
  sessionStorage.removeItem(key);
}