import React from 'react'
import TelegramLoginButton from 'telegram-login-button'

const LoginButton = () => {
  return (
    <div>
      <TelegramLoginButton
        botName="borodutch_club_bot"
        dataOnauth={(user) => console.log(user)}
        usePic={false}
        buttonSize="medium"
      />
    </div>
  )
}

export default LoginButton
