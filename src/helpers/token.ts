const tokenKey = 'token'

class TokenStorage {
  token: string | null = null

  constructor() {
    this.token = localStorage.getItem(tokenKey)
  }

  setToken(token: string | null) {
    this.token = token
    if (this.token) {
      localStorage.setItem(tokenKey, this.token)
    } else {
      localStorage.removeItem(tokenKey)
    }
  }
}

export default new TokenStorage()
