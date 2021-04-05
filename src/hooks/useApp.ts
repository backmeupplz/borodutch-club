import { useState } from 'react'

const tokenKey = 'token'

const useApp = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(tokenKey)
  )

  const setTokenProxy = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem(tokenKey, newToken)
    } else {
      localStorage.removeItem(tokenKey)
    }
    setToken(newToken)
  }

  return {
    token,
    setToken: setTokenProxy,
  }
}

export default useApp
