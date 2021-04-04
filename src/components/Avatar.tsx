import React from 'react'
import { classnames } from 'classnames/tailwind'
import gradient from 'classnames/gradient'

const container = classnames('flex', 'justify-center', 'py-8')
const imageContainer = classnames('rounded-avatar', 'overflow-hidden')
const image = classnames('w-96')

const Avatar = () => {
  return (
    <div className={container}>
      <div className={imageContainer}>
        <div className={gradient}>
          <img className={image} src="images/avatar.webp" alt="avatar" />
        </div>
      </div>
    </div>
  )
}

export default Avatar
