const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes/routes')

const server = express()

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', routes)

// server.get('/', (req, res) => {
//   console.log('here')
//   womblesDb.getWombles()
//     .then(wombles => {
//       console.log(wombles)
//       res.render('')
//     })

// })

module.exports = server
