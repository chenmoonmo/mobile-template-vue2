const TOKEN_KEY = 'phm_token'

export default class TokenUtils {
  constructor() {

  }

  static setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
  }

  static removeToken() {
    localStorage.removeItem(TOKEN_KEY)
  }

  static getToken() {
    return localStorage.getItem(TOKEN_KEY)
  }

}
