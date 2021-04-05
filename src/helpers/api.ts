import { TelegramUser } from 'telegram-login-button'
import fetch from 'unfetch'

const base = process.env.REACT_APP_BASE_URL

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

export async function getInfo(token: string) {
  return (
    await fetch(`${base}/info`, {
      headers: {
        token,
      },
    })
  ).json()
}

export async function getChatInviteLink(token: string) {
  return (
    await fetch(`${base}/info/link`, {
      headers: {
        token,
      },
    })
  ).json()
}

export async function getSubscriptionSession(token: string) {
  return (
    await fetch(`${base}/subscription/session`, {
      headers: {
        token,
      },
    })
  ).json()
}

export async function getPortal(token: string) {
  return (
    await fetch(`${base}/subscription/portal`, {
      headers: {
        token,
      },
    })
  ).json()
}
