import React from 'react'
import {Grid} from 'semantic-ui-react'

function WeatherStyle () {
  return (
  <>
    <div className="ui stackable menu">
      <div className="item">
        Welcome Username
        {/* <img className="ui avatar image" src="../server/public/default-avatar.svg" /> AVATAR IMAGE*/}
      </div>
    </div>
 
    <Grid textAlign='center' style={{ height: '75vh' }} verticalAlign='middle'>
    
    <Grid.Column style={{ maxWidth: 1000 }}>
    {/* <img className="ui medium circular image" src="../../server/public/Images/Clear.png"/>  NEED TO FIX */}
    <h4 className="ui horizontal divider header">
      <i className="cloudversify icon"></i>
      Weather Information
    </h4>
    <table className="ui definition table">
      <tbody>
        <tr>
          <td className="two wide column">Name</td>
          <td>(city name)</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>(country name)</td>
        </tr>
        <tr>
          <td>Forecast</td>
          <td>(weather.description)</td>
        </tr>
        <tr>
          <td>Sunrise</td>
          <td>(AM/PM timestamp - unix to date convertion)</td>
        </tr>
        <tr>
          <td>Sunset</td>
          <td>(AM/PM timestamp - unix to date convertion)</td>
        </tr>
        <tr>
          <td>Temp</td>
          <td>(temp) °C</td>
        </tr>
        <tr>
          <td>Feels Like</td>
          <td>(temp) °C</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>(number %)</td>
        </tr>
        <tr>
          <td>Wind Speed</td>
          <td>(speed - m/s => km/h convertion)</td>
        </tr>
        <tr>
          <td>Clouds</td>
          <td>(number %)</td>
        </tr>
      </tbody>
    </table>
    </Grid.Column>
    </Grid>
 </>
  )
}

export default WeatherStyle


//Rain--
//Clouds--
//Clear--
//Mist--
//Haze--
//Dust--
//Snow--
//Thunderstorm--
//Smoke