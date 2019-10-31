const express = require('express')

const router = express.Router()

const db = require('../db/db')

const config = require('../knexfile').development
const database = require('knex')(config)


router.get('/', (req, res) => {
  res.send('homepage')  
})

router.get('/listings', (req, res) => {
  res.send('listings page')  
})

router.get('/listings/:id', (req, res) => {
  id = req.params.id
  res.send('id of listings')  
})


module.exports = router
