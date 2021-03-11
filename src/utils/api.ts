import axios from 'axios'
import { User } from '@/models/User'
import store from '@/store'

const base = 'https://backend.club.borodutch.com'

export async function loginTelegram(loginInfo: any) {
  return (await axios.post(`${base}/login/telegram`, loginInfo)).data as User
}

export async function getUserInfo() {
  return (
    await axios.get(`${base}/info`, {
      headers: getHeaders(),
    })
  ).data
}

function getHeaders() {
  const user = (store as any).state.AppStore.user
  if (user.token) {
    return { token: user.token }
  } else {
    return undefined
  }
}
