import React, { FC } from 'react'
import gradientText from 'classnames/gradientText'

type Props = {
  url: string
}

const Link: FC<Props> = ({ url, children }) => {
  return (
    <a className={gradientText} href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default Link
