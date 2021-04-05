import { TelegramUser } from 'telegram-login-button'
import fetch from 'unfetch'

const base = 'https://backend.club.borodutch.com'

export async function login(user: TelegramUser) {
  return (
    await fetch(`${base}/login/telegram`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json()
}
