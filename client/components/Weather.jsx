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

// weather.description(String)
// weather.main(string)
// name (String - cityname)
// sys.country (String)
// sys.sunrise (TimeStamp - UnixTime?) // Math.floor(new Date().getTime()/1000.0)
// sys.sunset (Timestamp - UnixTime?)
// main.temp (Kelvin)
// main.feels_like (Kelvin)
// main.humidity (Number - percentage)
// wind.speed (number - m/s)
// clouds.all (number - percentage)