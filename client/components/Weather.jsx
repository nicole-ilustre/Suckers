import React, {useEffect} from 'react'
import { getWeather } from 'react'

function Weather () {
  useEffect(() => {
    getWeather()
      .then((res) => {
      })
      .catch(e => {
        console.log(e)
      })
  })
  
  return (
    <div>
      {name}
      {sys.country},
      {sys.sunrise},
      {sys.sunset},
      {main.temp},
      {main.feels_like},
      {main.humidity},
      {wind.speed},
      {clouds.all}
    </div>
  )
}

export default Weather

// name
// sys.country  
// sys.sunrise 
// sys.sunset
// main.temp
// main.feels_like
// main.humidit
// wind.speed
// clouds.all
