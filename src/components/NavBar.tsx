import React from 'react'
import { classnames } from 'classnames/tailwind'
import { LogoText } from 'components/Text'

const navBar = classnames(
  'flex-auto',
  'py-4',
  'sticky',
  'top-0',
  'bg-black-background'
)

const NavBar = () => {
  return (
    <div className={navBar}>
      <LogoText>Бородач Клуб</LogoText>
    </div>
  )
}

export default NavBar
