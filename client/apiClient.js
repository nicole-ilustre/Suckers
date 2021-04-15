import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1/weather'

export function getWeather (city) {
  return request
    .get(`${serverURL}/${city}`)
    .then(res => res.body)
}
