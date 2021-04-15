import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

export function getWeather () {
  return request
    .get(`${serverURL}/`)
    .then(res => res.body)
}
