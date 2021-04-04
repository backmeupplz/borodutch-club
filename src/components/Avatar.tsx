import React from 'react'
import { classnames } from 'helpers/tailwindClassnames'
import gradientClassnames from 'helpers/gradientClassnames'

const container = classnames('flex', 'justify-center', 'py-8')
const imageContainer = classnames('rounded-avatar', 'overflow-hidden')
const imageBackground = classnames(gradientClassnames)
const image = classnames('w-96')

const Avatar = () => {
  return (
    <div className={container}>
      <div className={imageContainer}>
        <div className={imageBackground}>
          <img className={image} src="images/avatar.webp" alt="avatar" />
        </div>
      </div>
    </div>
  )
}

export default Avatar
