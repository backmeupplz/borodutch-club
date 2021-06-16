import {
  getChatInviteLink,
  getInfo,
  getPortal,
  getSubscriptionSession,
  postCode,
  postEmail,
} from 'helpers/api'
import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_CLIENT_KEY!)

const useDashboard = (token: string) => {
  const [name, setName] = useState<string | null>(null)
  const [telegramId, setTelegramId] = useState<string | null>(null)
  const [subscriptionId, setSubscriptionId] = useState<string | null>(null)
  const [chatInviteLink, setChatInviteLink] = useState<string | null>(null)
  const [inviterName, setInviterName] = useState<string | null>(null)
  const [inviteCode, setInviteCode] = useState<string | null>(null)
  const [waitlistEmail, setWaitlistEmail] = useState<string | null>(null)
  const [code, setCode] = useState('')
  const [email, setEmail] = useState('')

  const fetchData = async () => {
    const info = await getInfo(token)
    setName(info.name)
    setTelegramId(info.telegramId)
    setSubscriptionId(info.subscriptionId)
    setInviterName(info.inviterName || null)
    setInviteCode(info.inviteCode || null)
    setWaitlistEmail(info.waitlistEmail || null)
  }

  const openCheckout = async () => {
    const stripe = await stripePromise
    if (!stripe) {
      return
    }
    const session = await getSubscriptionSession(token)
    await stripe.redirectToCheckout({
      sessionId: session.session,
    })
  }

  const openPortal = async () => {
    const { url } = await getPortal(token)
    window.location.href = url
  }

  const fetchChatInviteLink = async () => {
    const { link } = await getChatInviteLink(token)
    setChatInviteLink(link)
  }

  useEffect(() => {
    fetchData()
  }, [token])

  const useCode = async () => {
    try {
      const response = await postCode(token, code)
      if (response.error) {
        throw response.error
      }
      await fetchData()
      alert('Получилось!')
    } catch (err) {
      alert('Ошибка! Может, код не тот?')
    }
  }

  const useEmail = async () => {
    try {
      const response = await postEmail(token, email)
      if (response.error) {
        throw response.error
      }
      await fetchData()
      alert('Получилось!')
    } catch (err) {
      alert('Ошибка! Может, имейл невалидный?')
    }
  }

  return {
    name,
    telegramId,
    subscriptionId,
    chatInviteLink,
    inviterName,
    code,
    setCode,
    openCheckout,
    openPortal,
    fetchChatInviteLink,
    useCode,
    inviteCode,
    waitlistEmail,
    email,
    setEmail,
    useEmail,
  }
}

export default useDashboard
