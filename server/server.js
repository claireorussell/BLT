const path = require('path')
const express = require('express')

// const budgetRoutes = require('./budget')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

// server.use('/api/v1/blt', budgetRoutes)

module.exports = server
