const path = require('path')
const express = require('express')
const cors = require('cors')
const request = require('superagent')

const routes = require('./routes/routes.js')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/weather', routes)

module.exports = server

server.get('/api/v1/weatherProxy', (req, res) => {
    const serverURL = 'http://localhost:3000/api/v1'
    return request
    .get(`${serverURL}/weather?api_key=` + process.env.SECRET)
    .then(response => {
        res.json(response.body)
    })
})
