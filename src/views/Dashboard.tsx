import React, { FC } from 'react'
import { BodyText, HeaderText } from 'components/Text'
import useDashboard from 'hooks/useDashboard'
import Button from 'components/Button'
import { classnames } from 'classnames/tailwind'
import Link from 'components/Link'

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

const marginedContainer = classnames('my-4')
const MarginedContainer: FC = ({ children }) => {
  return <div className={marginedContainer}>{children}</div>
}

type ButtonContainerProps = {
  onClick: () => void
}
const ButtonContainer: FC<ButtonContainerProps> = ({ onClick, children }) => {
  return (
    <div className={buttonContainer}>
      <Button onClick={onClick}>{children}</Button>
    </div>
  )
}

const Dashboard: FC<Props> = ({ token }) => {
  const {
    name,
    subscriptionId,
    openCheckout,
    openPortal,
    fetchChatInviteLink,
    chatInviteLink,
  } = useDashboard(token)

  const renderUnsubscribed = () => {
    return (
      <div>
        <BodyText>
          Похоже, у тебя еще нет подписки. Чтобы получить пригласительную ссылку
          в секретный чат, тебе нужно приобрести подписку в $23.11 в месяц,
          нажав на кнопку ниже!
        </BodyText>
        <ButtonContainer onClick={openCheckout}>
          Оформить подписку!
        </ButtonContainer>
        <ButtonContainer
          onClick={() => {
            window.location.reload()
          }}
        >
          Ну или обновить страницу, вдруг что-то не подгрузилось
        </ButtonContainer>
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
        <ButtonContainer onClick={openPortal}>
          Менеджерить подписку
        </ButtonContainer>
        {!chatInviteLink && (
          <ButtonContainer onClick={fetchChatInviteLink}>
            Получить ссылку-инвайт!
          </ButtonContainer>
        )}
        {!!chatInviteLink && (
          <MarginedContainer>
            <BodyText>
              Ссылка валидна следущие 15 минут, зайти в группу могут только люди
              с активной подпиской: <Link url={chatInviteLink}>Войти!</Link>
            </BodyText>
          </MarginedContainer>
        )}
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
      <BodyText>
        Главный документ Клуба{' '}
        <Link url="https://telegra.ph/Glavnyj-dokument-Borodach-Kluba-04-05">
          тут
        </Link>
        .
      </BodyText>
    </div>
  )
}

export default Dashboard
