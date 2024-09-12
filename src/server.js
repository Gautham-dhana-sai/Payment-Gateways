const express = require('express')()
const http = require('http')
const server = http.createServer(express)
require("dotenv").config();
const cors = require('cors')

const index = require('./index')

express.use(cors())
express.use(index)

const PORT = process.env.PORT

server.listen(PORT, (req, res) => {
    console.log(`server started ${PORT}`)
})