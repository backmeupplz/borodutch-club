import { useState } from 'react'

const tokenKey = 'token'

const useApp = () => {
  const [token, setToken] = useState<string | null>(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmlraXRhIEtvbG1vZ29yb3YiLCJ0ZWxlZ3JhbUlkIjo3NjEwNDcxMSwiaWF0IjoxNjE3NTgyMDkxfQ.WYN32XzH3HB6z7vGZexLKIOcWWLuVWqktkP7KMBKrp8' ||
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
