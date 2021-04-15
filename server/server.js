const path = require('path')
const express = require('express')
const cors = require('cors')

<<<<<<< HEAD

||||||| 703b364
=======
const routes = require('/routes/routes.js')

>>>>>>> main
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.use('/api/v1/weather', routes)

module.exports = server
