import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Login } from './Login'
import Weather from './Weather'

const App = () => {
  return (
    <Router>
      <Route exact path={'/weather'} component={Weather} />
      <Route exact path ={'/'} component={Login} />
    </Router>
  )
}

export default App
