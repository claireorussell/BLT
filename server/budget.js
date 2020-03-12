const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

module.exports = router
