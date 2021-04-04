import React from 'react'
import NavBar from 'components/NavBar'
import Root from 'components/Root'
import Landing from 'views/Landing'
import useApp from 'hooks/useApp'
import Dashboard from 'views/Dashboard'

const App = () => {
  const { token, setToken } = useApp()

  return (
    <Root>
      <NavBar setToken={setToken} token={token} />
      {token ? <Dashboard /> : <Landing />}
    </Root>
  )
}

export default App
