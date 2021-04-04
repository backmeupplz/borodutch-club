import React, { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import { LogoText } from 'components/Text'
import TelegramLoginButton from 'telegram-login-button'
import Button from 'components/Button'
import { login } from 'helpers/api'

const navBar = classnames(
  'flex-auto',
  'py-4',
  'sticky',
  'top-0',
  'bg-black-background',
  'flex',
  'flex-row',
  'justify-between',
  'items-center'
)

type Props = {
  setToken: (token: string | null) => void
  token: string | null
}

const NavBar: FC<Props> = ({ setToken, token }) => {
  return (
    <div className={navBar}>
      <LogoText>Бородач Клуб</LogoText>
      {token ? (
        <Button
          onClick={() => {
            setToken(null)
          }}
        >
          Выйти
        </Button>
      ) : (
        <TelegramLoginButton
          botName="borodutch_club_bot"
          dataOnauth={async (user) => {
            const data = await login(user)
            setToken(data.token)
          }}
          usePic={false}
          buttonSize="medium"
        />
      )}
    </div>
  )
}

export default NavBar
