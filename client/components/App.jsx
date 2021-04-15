import React, {useState, useEffect} from 'react'
<<<<<<< HEAD
// import Login from './Login'
import LoginStyle from './LoginStyle'
||||||| 703b364
=======
import Login from './Login'
import Avatar from './Avatar'
import Weather from './Weather'
import { getWeather } from '../apiClient'
>>>>>>> main

const App = () => {
  return (
<<<<<<< HEAD
    <>
    {/* <Login /> */}
    <LoginStyle />
    </>
||||||| 703b364
    <Login />
=======
    <div>
      <Login />
      <Avatar />
      <Weather />
    </div>
>>>>>>> main
  )
}

export default App
