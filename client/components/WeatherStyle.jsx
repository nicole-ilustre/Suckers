import React from 'react'
import {Grid} from 'semantic-ui-react'


function WeatherStyle () {
  return (
    <>
      <div className="ui stackable menu">
        <div className="item">
        Welcome Username
          <img className="ui avatar image" src={`https://avatars.dicebear.com/api/${formData.gender}/${formData.name}.svg`} />
        </div>
      </div>
      <Grid textAlign='center' style={{ height: '75vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 1000 }}>
          <img className="ui centered image" src={'/images/' + weather.main + '.png'}/>
          <h4 className="ui horizontal divider header">
            <i className="cloudversify icon"></i>
      Weather Information
          </h4>
          <table className="ui definition table">
            <tbody>
              <tr>
                <td className="two wide column">Name</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{sys.country}</td>
              </tr>
              <tr>
                <td>Forecast</td>
                <td>{weather.description}</td>
              </tr>
              <tr>
                <td>Sunrise</td>
                <td>{new Date(sys.sunrise).getTime()}</td>
              </tr>
              <tr>
                <td>Sunset</td>
                <td>{new Date(sys.sunset).getTime()}</td>
              </tr>
              <tr>
                <td>Temp</td>
                <td> {main.temp-273.15} °C</td> 
              </tr>
              <tr>
                <td>Feels Like</td>
                <td>{main.feels_like-273.15} °C</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{main.humidity}%</td>
              </tr>
              <tr>
                <td>Wind Speed</td>
                <td>{wind.speed*3.6} km/h</td>
              </tr>
              <tr>
                <td>Clouds</td>
                <td>{clouds.all}%</td>
              </tr>
            </tbody>
          </table>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default WeatherStyle
