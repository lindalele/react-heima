// 封装本地存储的操作
const TOKEN_KEY = 'itcast_geek_pc'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY)
}

export function hasToken() {
  return !!getToken()
}
