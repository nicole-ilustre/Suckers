const path = require('path')
const express = require('express')
const cors = require('cors')
const request = require('superagent')

const routes = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/weather', routes)

module.exports = server

server.get('/api/v1/weather/:city', (req, res) => {
  const city = req.params.city
  return request
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.SECRET}`)
    .then(response => {
      return res.json(response.body)
    })
    .catch(err => {
      console.log(err)
    })
})
