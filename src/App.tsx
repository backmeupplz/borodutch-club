import React from 'react'
import { classnames } from 'tailwindcss-classnames'
import NavBar from 'components/NavBar'
import Avatar from 'components/Avatar'

const root = classnames('container', 'mx-auto', 'px-4')
const title = classnames('text-white', 'text-6xl', 'font-bold', 'text-center')
const subtitle = classnames('text-gray-300', 'text-center', 'mt-4')

function App() {
  return (
    <div className={root}>
      <NavBar />
      <Avatar />
      <p className={title}>Привет! Это Никита</p>
      <p className={subtitle}>
        Я запустил более 40 IT продуктов из которых 19 остались в живых и
        набрали 33 708 083 пользователей. Посмотреть статистику в реальном
        времени по каждому из проектов можно вот тут.
      </p>
    </div>
  )
}

export default App
