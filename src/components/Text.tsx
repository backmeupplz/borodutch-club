import React, { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import gradientText from 'classnames/gradientText'

const whiteText = classnames('text-white')
const grayText = classnames('text-gray-300')

const headerText = classnames(
  whiteText,
  'text-3xl',
  'md:text-6xl',
  'font-bold',
  'text-center',
  'mb-6'
)
export const HeaderText: FC = ({ children }) => {
  return <p className={headerText}>{children}</p>
}

const subheaderText = classnames(
  whiteText,
  'text-xl',
  'md:text-2xl',
  'font-bold',
  'text-center',
  'my-12'
)
export const SubheaderText: FC = ({ children }) => {
  return <p className={subheaderText}>{children}</p>
}

const bodyText = classnames(grayText, 'text-center')
export const BodyText: FC = ({ children }) => {
  return <p className={bodyText}>{children}</p>
}

const purposeTitle = classnames(whiteText, 'text-center', 'text-lg')
export const PurposeTitle: FC = ({ children }) => {
  return <p className={purposeTitle}>{children}</p>
}

const purposeSubtitle = classnames(grayText, 'text-center')
export const PurposeSubtitle: FC = ({ children }) => {
  return <p className={purposeSubtitle}>{children}</p>
}

export const GradientText: FC = ({ children }) => {
  return <span className={gradientText}>{children}</span>
}

const logo = classnames(gradientText, 'font-bold')
export const LogoText: FC = ({ children }) => {
  return <div className={logo}>{children}</div>
}
