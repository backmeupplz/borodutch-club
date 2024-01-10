import React from 'react'
import formatNumber from 'helpers/formatNumber'
import PurposeBlock from 'components/PurposeBlock'
import PurposeItem from 'components/PurposeItem'
import Steps from 'components/Steps'
import Perks from 'components/Perks'
import Faq from 'components/Faq'
import Avatar from 'components/Avatar'
import {
  HeaderText,
  BodyText,
  SubheaderText,
  GradientText,
} from 'components/Text'
import Link from 'components/Link'
import useLanding from 'hooks/useLanding'

const Landing = () => {
  const { userCount } = useLanding()

  return (
    <div>
      <Avatar />
      <HeaderText>Hello! This is Nikita</HeaderText>
      <BodyText>
        I have launched more than 50 IT products, out of which 32 are still
        alive and have gathered {userCount ? formatNumber(userCount) : '~'}{' '}
        users. You can view real-time statistics for each project{' '}
        <Link url="https://borodutch.com">here</Link>.
      </BodyText>
      <PurposeBlock>
        <PurposeItem
          image="chart"
          title="I have figured out what works and what doesn't when launching IT projects"
          subtitle="I know exactly what needs to be done to launch an MVP in 2-6 weeks and attract the first users. I know how to release a solution to the market that is needed not only by the creators but also by real users."
        />
        <PurposeItem
          image="glass"
          title="For the past few years, I have been trying to find a cozy community of serial launchers like myself"
          subtitle="A community of people who love to create MVPs quickly, cheaply, and immediately test the demand in the live market. Unfortunately, no matter how much I searched, everywhere was some sort of chaos with wannabe startuppers who just wanted to chat, but by no means launch."
        />
        <PurposeItem
          image="time"
          title="That's why I decided to create my own private Club"
          subtitle="It should include only people who are actually launching products, not those who chew their cud for half a year to a year, launch some nonsense nobody needs to the market, and become disillusioned with the IT industry, falling into prolonged depression. We say a firm “No” to depression and whining!"
        />
      </PurposeBlock>
      <SubheaderText>
        The main goal of your membership in the Borodutch Club is to launch your
        product, test business hypotheses, and subsequently refine the product
        based on user feedback
      </SubheaderText>
      <Steps
        steps={[
          { index: 1, title: 'Draw project layout on paper by hand' },
          { index: 1.5, title: 'Check in layouts with the Club and me' },
          { index: 2, title: 'Turn layouts into designs with a designer' },
          { index: 2.5, title: 'Check in the design with the Club and me' },
          { index: 3, title: 'Develop the product with a programmer' },
          { index: 4, title: 'Launch and search for the first users' },
          {
            index: 5,
            title: 'Improve the product based on user feedback',
          },
        ]}
      />
      <HeaderText>
        This is an elite Club and membership costs{' '}
        <GradientText>$23.11</GradientText> per month
      </HeaderText>
      <BodyText>
        The price is determined by two important aspects. First, the paywall
        helps to weed out people who will not benefit from the Club — such
        people do not need the Club, and the Club does not need them. Secondly,
        launching a product is not an expensive, but also not a cheap journey.
        Consider that $23.11 per month will be a small percentage of what you
        will spend on the launch.
      </BodyText>
      <Perks
        perks={[
          'Access to the private Telegram chat with no-bullshit product launchers who don’t whine for years about the difficulties of launching, but just do it',
          'Your own skin in the game, because having paid money, at least, your inner critic will definitely make you work',
          'Direct line of communication with me, advice, mentoring support, help at every stage of product launch: I will help simplify where it needs to be simplified, and clarify where it needs to be clarified; help choose a good technology stack, find a good developer, designer, copywriter — in general, create all the conditions for you to launch',
        ]}
      />
      <SubheaderText>Frequently Asked Questions</SubheaderText>
      <Faq
        questions={[
          {
            question: 'Will the Borodutch Club launch my project for me?',
            answer:
              'No, you pay $23.11 per month for access to the Club and to me personally. You will be helped with advice, finding contractors, simplifying the product concept, choosing a business hypothesis, but not with the actual development, launch, promotion, and the rest. I expect all Club members to act independently.',
          },
          {
            question:
              'Do you have any designers and programmers you can suggest?',
            answer:
              'No, but we will help you find them on open platforms, write the correct job description, and negotiate the work process.',
          },
          {
            question:
              "So, I'm just paying for access to a private Telegram group?",
            answer:
              'Yes, exactly. But the people in this private group are worth their weight in gold.',
          },
          {
            question:
              'What if I don’t like the Club or realize that I don’t need it?',
            answer:
              'You can always unsubscribe from the paid subscription and thus leave the Club. If you do this within your first month in the Club, your money for the first month will be refunded (you need to contact me for the refund). The possibility of refunding any money for the subscription expires one calendar month after the Club membership start.',
          },
        ]}
      />
      <SubheaderText>
        Ready to start? Log into your account via Telegram above, then you can
        pay for the subscription and get access to the closed group. The Club is
        invite-only so you will need to obtain an invite first.
      </SubheaderText>
      <BodyText>
        Don't see the login button through Telegram at the top right? Try
        another browser or a VPN.
      </BodyText>
    </div>
  )
}

export default Landing
