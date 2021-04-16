import React, {useState, useEffect} from 'react'
// import LoginStyle from './LoginStyle'
import Login from './Login'
import Avatar from './Avatar'
import Weather from './Weather'
import { getWeather } from '../apiClient'
import WeatherStyle from './WeatherStyle'

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      {/* <Avatar />
      <Weather /> */}
      {/* <LoginStyle /> */}
      <WeatherStyle />
    </div>
  )
}

export default App
