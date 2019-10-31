const express = require('express')

const router = express.Router()

const db = require('../db/db')

const config = require('../knexfile').development
const database = require('knex')(config)


router.get('/', (req, res) => {
  res.send('Hi')  
})

module.exports = router
