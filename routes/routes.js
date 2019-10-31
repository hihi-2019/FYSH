const express = require('express')

const router = express.Router()

const db = require('../db/db')

const config = require('../knexfile').development
const database = require('knex')(config)


router.get('/', (req, res) => {
  res.render('home', {})  
})

router.get('/listings', (req, res) => {
  res.render('items_list', {})  
})

router.get('/listings/:id', (req, res) => {
  id = req.params.id
  res.send('id of listings')  
})

router.get('/profile/:id', (req, res) => {
  res
})


module.exports = router
