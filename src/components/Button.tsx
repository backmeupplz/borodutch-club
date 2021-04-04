import { classnames } from 'classnames/tailwind'
import React, { FC } from 'react'
import { LogoText } from './Text'

type Props = {
  onClick: () => void
}

const button = classnames('cursor-pointer')
const Button: FC<Props> = ({ onClick, children }) => {
  return (
    <div className={button} onClick={onClick}>
      <LogoText>{children}</LogoText>
    </div>
  )
}

export default Button
