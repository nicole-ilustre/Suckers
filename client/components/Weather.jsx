import React, { useEffect, useState } from 'react'
import { getWeather } from '../apiClient'
import { userInfo } from './Login'
import { Grid } from 'semantic-ui-react'

function Weather () {
  const [weatherData, setWeather] = useState({
    weather: [{
      main: '',
      description: ''
    }],
    name: '',
    sys: {
      country: '',
      sunrise: '',
      sunset: ''
    },
    main: {
      temp: 0,
      feels_like: 0,
      humidity: 0
    },
    wind: {
      speed: 0
    },
    clouds: {
      all: 1
    }
  })

  useEffect(() => {
    getWeather(userInfo.city)
      .then(info => {
        setWeather(info)
        return null
      })
      .catch(e => console.error(e.message))
  }, [])

  return (
    <>
      <div className="ui stackable menu">
        <div className="item">
        Welcome {userInfo.name}
          <img className="ui avatar image" src={`https://avatars.dicebear.com/api/${userInfo.gender}/${userInfo.name}.svg`} />
        </div>
      </div>
      <Grid textAlign='center' style={{ height: '75vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 1000 }}>
          <img className="ui centered image" src={'/images/' + weatherData.weather['0'].main + '.png'}/>
          <h4 className="ui horizontal divider header">
            <i className="cloudversify icon"></i>
      Weather Information
          </h4>
          <table className="ui definition table">
            <tbody>
              <tr>
                <td className="two wide column">Name</td>
                <td>{weatherData.name}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{weatherData.sys.country}</td>
              </tr>
              <tr>
                <td>Forecast</td>
                <td>{weatherData.weather['0'].description}</td>
              </tr>
              <tr>
                <td>Sunrise</td>
                <td>{new Date(weatherData.sys.sunrise * 1000).getHours()}</td>
              </tr>
              <tr>
                <td>Sunset</td>
                <td>{new Date(weatherData.sys.sunset * 1000).getTime()}</td>
              </tr>
              <tr>
                <td>Temp</td>
                <td> {Math.floor(weatherData.main.temp - 273.15)} °C</td>
              </tr>
              <tr>
                <td>Feels Like</td>
                <td>{Math.floor(weatherData.main.feels_like - 273.15)} °C</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{weatherData.main.humidity}%</td>
              </tr>
              <tr>
                <td>Wind Speed</td>
                <td>{Math.floor(weatherData.wind.speed * 3.6)} km/h</td>
              </tr>
              <tr>
                <td>Clouds</td>
                <td>{weatherData.clouds.all}%</td>
              </tr>
            </tbody>
          </table>
        </Grid.Column>
      </Grid>
    </>
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
// wind.speed (number - m/s) convert to km/hr
// clouds.all (number - percentage)