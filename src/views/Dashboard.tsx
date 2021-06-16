import React, { FC, useState } from 'react'
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

const formContainer = classnames('flex', 'flex-row', 'justify-center', 'my-4')
const inputClass = classnames('rounded', 'p-2', 'mr-4')

const Dashboard: FC<Props> = ({ token }) => {
  const {
    name,
    subscriptionId,
    openCheckout,
    openPortal,
    fetchChatInviteLink,
    useCode,
    chatInviteLink,
    inviterName,
    inviteCode,
    code,
    setCode,
  } = useDashboard(token)

  const renderUnsubscribed = () => {
    return inviterName ? (
      <div>
        <BodyText>
          Поздравляю! Твое приглашение пришло от {inviterName}.
        </BodyText>
        <BodyText>
          Похоже, у тебя еще нет подписки. Чтобы получить пригласительную ссылку
          в секретный чат, тебе нужно приобрести подписку в $46.22 в месяц,
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
    ) : (
      <div>
        <BodyText>
          Вход в Клуб только по инвайтам. Как получить инвайт? У других членов
          Клуба. Введите свой инвайт-код ниже и нажмите на кнопку.
        </BodyText>
        <div className={formContainer}>
          <input
            type="text"
            className={inputClass}
            placeholder="Инвайт-код"
            value={code}
            onChange={(e) => {
              setCode(e.target.value)
            }}
          />
          <ButtonContainer onClick={useCode}>Использовать!</ButtonContainer>
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
        <BodyText>
          Твой инвайт-код: "{inviteCode}", используй его с умом. Давай
          инвайт-код только людям, которых хочешь видеть в Клубе. Они смогут
          оплатить подписку и зайти в Клуб!
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
              Ссылка валидна следующие 15 минут, зайти в группу могут только
              люди с активной подпиской:{' '}
              <Link url={chatInviteLink}>Войти!</Link>
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
