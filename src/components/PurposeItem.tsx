import React, { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import { PurposeTitle, PurposeSubtitle } from './Text'

type Props = {
  image: 'chart' | 'glass' | 'time'
  title: string
  subtitle: string
}

const itemContainer = classnames('my-12')
const imageContainer = classnames('flex', 'justify-center')
const textContainer = classnames('my-2')
const PurposeItem: FC<Props> = ({ image, title, subtitle }) => {
  const imageClass = () => {
    switch (image) {
      case 'chart':
        return classnames('w-chart')
      case 'glass':
        return classnames('w-glass')
      case 'time':
        return classnames('w-time')
    }
  }

  return (
    <div className={itemContainer}>
      <div className={imageContainer}>
        <img
          className={imageClass()}
          src={`images/${image}.webp`}
          alt={image}
        />
      </div>
      <div className={textContainer}>
        <PurposeTitle>{title}</PurposeTitle>
      </div>
      <div className={textContainer}>
        <PurposeSubtitle>{subtitle}</PurposeSubtitle>
      </div>
    </div>
  )
}

export default PurposeItem
