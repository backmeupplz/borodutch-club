import { classnames } from 'classnames/tailwind'
import React, { FC } from 'react'

const block = classnames(
  'bg-black-background-purpose',
  'px-2',
  'md:px-6',
  'my-12',
  'border',
  'border-white',
  'border-opacity-10',
  'rounded-3xl'
)
const PurposeBlock: FC = ({ children }) => {
  return <div className={block}>{children}</div>
}

export default PurposeBlock
