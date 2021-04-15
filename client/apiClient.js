import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

export function getWeather () {
  return request
    .get(`${serverURL}/weatherProxy`)
    .then(res => res.body)
}

export function weather () {
  return request
    .get('')
    .then(res=> res.body)
}
