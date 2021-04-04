import { useEffect, useState } from 'react'
import fetch from 'unfetch'

const useLanding = () => {
  const [userCount, setUserCount] = useState<undefined | number>(undefined)

  const fetchData = async () => {
    try {
      const data = await (
        await fetch('https://stats.borodutch.com/count')
      ).json()
      setUserCount(data.count)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { userCount }
}

export default useLanding
