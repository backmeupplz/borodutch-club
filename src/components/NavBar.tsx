import React from 'react'
import { classnames } from 'helpers/tailwindClassnames'
import gradientClassnames from 'helpers/gradientClassnames'

const navBar = classnames(
  'flex-auto',
  'py-4',
  'sticky',
  'top-0',
  'bg-black-background'
)
const gradientText = classnames(
  gradientClassnames,
  'bg-clip-text',
  'text-transparent'
)

const NavBar = () => {
  return (
    <div className={navBar}>
      <span className={gradientText}>BORODUTCH CLUB</span>
    </div>
  )
}

export default NavBar
