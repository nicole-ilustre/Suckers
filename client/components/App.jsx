import React, {useState, useEffect} from 'react'
import Login from './Login'
import Avatar from './Avatar'
import Weather from './Weather'
import { getWeather } from '../apiClient'

const App = () => {
  return (
    <div>
      <Login />
      <Avatar />
      <Weather />
    </div>
  )
}

export default App
