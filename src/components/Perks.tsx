import React, { FC } from 'react'
import gradient from 'classnames/gradient'
import { classnames } from 'classnames/tailwind'
import { BodyText, GradientText, SubheaderText } from 'components/Text'

type Props = {
  perks: string[]
}

type PerkProps = {
  isLast: boolean
}
const perkContainer = classnames('p-2', 'w-full', 'md:w-1/2')
const perkLastContainer = classnames('p-2', 'w-full')
const perk = classnames(
  'bg-gradient-to-b',
  'from-black-perk-gradient-light',
  'to-black-perk-gradient-dark',
  'p-6',
  'rounded-2xl',
  'h-full',
  'items-center',
  'flex'
)
const Perk: FC<PerkProps> = ({ children, isLast }) => {
  return (
    <div className={isLast ? perkLastContainer : perkContainer}>
      <div className={perk}>
        <BodyText>{children}</BodyText>
      </div>
    </div>
  )
}

const root = classnames('my-8')
const container = classnames(
  gradient,
  'flex',
  'rounded-2xl',
  'flex-wrap',
  'flex-row',
  'justify-center'
)
const Perks: FC<Props> = ({ perks }) => {
  return (
    <div className={root}>
      <SubheaderText>
        <GradientText>What do you get for $23.11 a month?</GradientText>
      </SubheaderText>
      <div className={container}>
        {perks.map((p, i) => (
          <Perk key={i} isLast={i === perks.length - 1}>
            {p}
          </Perk>
        ))}
      </div>
    </div>
  )
}

export default Perks
