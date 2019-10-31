const knex = require('knex')
const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'
const database = knex(config[env])

function showItems(db = database){
  return db('items')
    .select()
    .then(items => {
      return items
    })
}

function findItem(item_id, db = database){
  return db('users')
    .leftOuterJoin('items', 'users.id', 'items.user_id')
    .select('items.id AS item_id', 'users.name AS user_name', '*')
    .where('item_id', item_id)
    .then(item => {
      delete item[0].id
      return item
    })
}


module.exports = {
  showItems,
  findItem,
}