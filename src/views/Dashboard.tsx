import React, { FC } from 'react'
import { BodyText, HeaderText } from 'components/Text'
import useDashboard from 'hooks/useDashboard'
import Button from 'components/Button'
import { classnames } from 'classnames/tailwind'
import { getSubscriptionSession, getPortal } from 'helpers/api'
import { loadStripe } from '@stripe/stripe-js'
import Link from 'components/Link'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_CLIENT_KEY!)

type Props = {
  token: string
}

const buttonContainer = classnames(
  'flex',
  'flex-row',
  'justify-center',
  'my-4',
  'select-none'
)

const Dashboard: FC<Props> = ({ token }) => {
  const { name, subscriptionId } = useDashboard(token)

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

  const renderUnsubscribed = () => {
    return (
      <div>
        <BodyText>
          Похоже, у тебя еще нет подписки. Чтобы получить пригласительную ссылку
          в секретный чат, тебе нужно приобрести подписку в $23.11 в месяц,
          нажав на кнопку ниже!
        </BodyText>
        <div className={buttonContainer}>
          <Button
            onClick={() => {
              openCheckout()
            }}
          >
            Оформить подписку!
          </Button>
        </div>
        <div className={buttonContainer}>
          <Button
            onClick={() => {
              window.location.reload()
            }}
          >
            Ну или обновить страницу, вдруг что-то не подгрузилось
          </Button>
        </div>
      </div>
    )
  }

  const renderSubscribed = () => {
    return (
      <div>
        <BodyText>
          Найс! У тебя получилось подписаться, подписка активна. Клацни кнопку
          ниже, если хочешь ее поменеджерить. Знай, что после отписки бот
          мгновенно удалит тебя из Бородач Клаба.
        </BodyText>
        <div className={buttonContainer}>
          <Button onClick={openPortal}>Менеджерить подписку</Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <HeaderText>Привет, {name}!</HeaderText>
      {!subscriptionId ? renderUnsubscribed() : renderSubscribed()}
      <BodyText>
        Если есть какие проблемы, пиши мне{' '}
        <Link url="https://t.me/borodutch">в личку</Link>.
      </BodyText>
    </div>
  )
}

export default Dashboard
