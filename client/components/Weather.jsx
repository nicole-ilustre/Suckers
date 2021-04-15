import React, {useEffect} from 'react'

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
