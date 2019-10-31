const express = require('express')

const router = express.Router()

const db = require('../db/db')

const config = require('../knexfile').development
const database = require('knex')(config)


router.get('/', (req, res) => {
  res.render('home', {})  
})

router.get('/listings', (req, res) => {
  db.showItems()
    .then(data => {
      res.render('items_list', {data})  
    })
})

router.get('/listings/:id', (req, res) => {
  id = req.params.id
  db.findItem(id)
  .then(data => {
    console.log('\nData sent to individual item route')
    console.log(data)
      res.render('item', {data})  
    })
})



router.get('/profile/:id', (req, res) => {
  id = req.params.id
  db.findUser(id)
  .then(profile => {
    console.log(profile)
    res.render('profile', {profile})
  })
})





router.get('/signup', (req, res) => {
  res.render('signup', {})
})

router.post('/add', (req, res) => {
  // res.render('signup', {})
  console.log(req.body)
  db.newUser(req.body)

  res.redirect('/')
})

router.get('/newitem', (req, res) => {
  res.render('newitem', {})
})



module.exports = router
