import { getInfo } from 'helpers/api'
import { useEffect, useState } from 'react'

const useDashboard = (token: string) => {
  const [name, setName] = useState<string | null>(null)
  const [telegramId, setTelegramId] = useState<string | null>(null)
  const [subscriptionId, setSubscriptionId] = useState<string | null>(null)

  const fetchData = async () => {
    const info = await getInfo(token)
    setName(info.name)
    setTelegramId(info.telegramId)
    setSubscriptionId(info.subscriptionId)
  }

  useEffect(() => {
    fetchData()
  }, [token])

  return {
    name,
    telegramId,
    subscriptionId,
  }
}

export default useDashboard
