import React, { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import { BodyText, PurposeTitle } from 'components/Text'
import gradient from 'classnames/gradient'

interface Step {
  index: number
  title: string
}

type Props = {
  steps: Step[]
}

const container = classnames('my-12', 'flex', 'justify-center')
const stepsContainer = classnames('flex', 'flex-col')
const stepContainer = classnames('flex', 'flex-row', 'w-full', 'my-2')
const stepBallContainer = classnames('flex', 'justify-center', 'items-center')
const stepBall = classnames(
  gradient,
  'rounded-full',
  'p-1',
  'w-8',
  'h-8',
  'flex',
  'items-center',
  'justify-center'
)
const stepBallText = classnames('text-black-background', 'font-bold')
const stepTextContainer = classnames(
  gradient,
  'rounded-3xl',
  'py-1',
  'ml-4',
  'w-full'
)
const stepTextInnerContainer = classnames(
  'bg-gradient-to-b',
  'from-black-perk-gradient-light',
  'to-black-perk-gradient-dark',
  'p-6',
  'rounded-2xl'
)
const Steps: FC<Props> = ({ steps }) => {
  return (
    <div>
      <BodyText>
        In our Club, we launch an MVP and immediately find users, instead of
        bringing to the market a complicated solution that nobody needs. The
        standard product launch process looks like this:
      </BodyText>
      <div className={container}>
        <div className={stepsContainer}>
          {steps.map((s) => (
            <div className={stepContainer}>
              <div className={stepBallContainer}>
                <div className={stepBall}>
                  <span className={stepBallText}>{s.index}</span>
                </div>
              </div>
              <div className={stepTextContainer}>
                <div className={stepTextInnerContainer}>
                  <PurposeTitle key={s.index}>{s.title}</PurposeTitle>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Steps
