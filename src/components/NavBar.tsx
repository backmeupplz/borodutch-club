import React from 'react'
import { classnames } from 'classnames/tailwind'
import { LogoText } from 'components/Text'
import LoginButton from 'components/LoginButton'

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

const NavBar = () => {
  return (
    <div className={navBar}>
      <LogoText>Бородач Клуб</LogoText>
      <LoginButton />
    </div>
  )
}

export default NavBar
