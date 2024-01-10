import React, { FC } from 'react'
import { BodyText, HeaderText } from 'components/Text'
import useDashboard from 'hooks/useDashboard'
import Button from 'components/Button'
import { classnames } from 'classnames/tailwind'
import Link from 'components/Link'

type Props = {
  token: string
}

const buttonContainer = classnames(
  'flex',
  'flex-row',
  'justify-center',
  'my-4',
  'select-none'
)

const marginedContainer = classnames('my-4')
const MarginedContainer: FC = ({ children }) => {
  return <div className={marginedContainer}>{children}</div>
}

type ButtonContainerProps = {
  onClick: () => void
}
const ButtonContainer: FC<ButtonContainerProps> = ({ onClick, children }) => {
  return (
    <div className={buttonContainer}>
      <Button onClick={onClick}>{children}</Button>
    </div>
  )
}

const formContainer = classnames('flex', 'flex-row', 'justify-center', 'my-4')
const inputClass = classnames('rounded', 'p-2', 'mr-4')

const Dashboard: FC<Props> = ({ token }) => {
  const {
    name,
    subscriptionId,
    openCheckout,
    openPortal,
    fetchChatInviteLink,
    useCode,
    chatInviteLink,
    inviterName,
    inviteCode,
    code,
    setCode,
    waitlistEmail,
    email,
    setEmail,
    useEmail,
  } = useDashboard(token)

  const renderUnsubscribed = () => {
    return inviterName ? (
      <div>
        <BodyText>
          Congratulations! Your invite came from {inviterName}.
        </BodyText>
        <BodyText>
          Looks like you don't have a subscription yet. To get an invite link to
          the private group, you need to purchase a subscription for $23.11 a
          month below!
        </BodyText>
        <ButtonContainer onClick={openCheckout}>Subscribe!</ButtonContainer>
        <ButtonContainer
          onClick={() => {
            window.location.reload()
          }}
        >
          (or refresh the page if something broke)
        </ButtonContainer>
      </div>
    ) : (
      <div>
        <BodyText>
          Borodutch Club is invite-only. You can get an invite from an active
          Club member. Enter the invite code below and press the button!
        </BodyText>
        <div className={formContainer}>
          <input
            type="text"
            className={inputClass}
            placeholder="Invite code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value)
            }}
          />
          <ButtonContainer onClick={useCode}>Использовать!</ButtonContainer>
        </div>
        {waitlistEmail ? (
          <BodyText>
            Amazing! You have added {waitlistEmail} to the wait list. I'll email
            you when I'll open the registration!
          </BodyText>
        ) : (
          <div>
            <BodyText>
              Or if you don't know anyone from the Club, leave your email here —
              then I'll reach out when the registration will be open for you!
            </BodyText>
            <div className={formContainer}>
              <input
                type="email"
                className={inputClass}
                placeholder="email@domain.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <ButtonContainer onClick={useEmail}>Subscribe!</ButtonContainer>
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderSubscribed = () => {
    return (
      <div>
        <BodyText>
          Nice! You've managed to subscribe, and your subscription is active.
          Click the button below if you want to manage it. Be aware that after
          unsubscribing, the bot will instantly remove you from the Borodutch
          Club.
        </BodyText>
        <BodyText>
          Your invite code: "{inviteCode}", use it wisely. Only give the code to
          the people whom you want to see in the Club. They will be able to pay
          for the subscription and enter the Club!
        </BodyText>
        <ButtonContainer onClick={openPortal}>
          Manage subscription
        </ButtonContainer>
        {!chatInviteLink && (
          <ButtonContainer onClick={fetchChatInviteLink}>
            Get an invite link!
          </ButtonContainer>
        )}
        {!!chatInviteLink && (
          <MarginedContainer>
            <BodyText>
              The link is valid for the next 15 minutes, and only people with an
              active subscription can enter the group:{' '}
              <Link url={chatInviteLink}>Enter!</Link>
            </BodyText>
          </MarginedContainer>
        )}
      </div>
    )
  }

  return (
    <div>
      <HeaderText>Hi, {name}!</HeaderText>
      {!subscriptionId ? renderUnsubscribed() : renderSubscribed()}
      <BodyText>
        If you have any issues, contact me{' '}
        <Link url="https://t.me/borodutch">on Telegram</Link>.
      </BodyText>
      <BodyText>
        The Main Document of the Club{' '}
        <Link url="https://telegra.ph/The-Main-Document-of-Borodutch-Club-01-03">
          is here
        </Link>
        .
      </BodyText>
    </div>
  )
}

export default Dashboard
