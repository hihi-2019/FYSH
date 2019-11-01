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

function showCategories(db = database){
  return db('items')
    .select('category')
    .distinct()
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

function newUser (userData, db = database){
  return db('users')
    .insert(userData)
    .select()
    .then(userData => {
      return userData
  })
}

function addItem (itemData, db = database){
  return db('items')
    .insert({'name': itemData.itemname, 'category': "category", 'price': itemData.price, "user_id": 1, 'picture': itemData.picture})
    .then(data => {
      console.log(data)
    })
}

function findUser (userId, db = database){
  return db('users')
  .select()
  .where('id', userId)
  .then(user => {
    console.log(user)
    return user
  })
}

function showUserIds (db = database){
  return db('users')
  .select('id', 'username')
  .then(username => {
    console.log(username)
    return username
  })
}








module.exports = {
  showItems,
  findItem,
  newUser,
  findUser,
  showCategories,
  addItem,
  showUserIds,
}