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

function showItem(id, db = database){
  return db('items')
    .select()
    .where('id', id)
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

function findItem(id, db = database){
  return db('users')
    .leftOuterJoin('items', 'users.id', 'items.user_id')
    .select('items.id AS item_id', 'users.name AS user_name', '*')
    .where('item.id', id)
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
    .insert(itemData)
    .then(data => {
      console.log(data)
    })
}

function findUser (userId, db = database){
  return db('users')
  .select()
  .where('id', userId)
  .then(user => {
    return user
  })
}

function showUserIds (db = database){
  return db('users')
  .select('id', 'username')
  .then(username => {
    return username
  })
}


function updateListing(updateItemData, id, db = database){
  return db('items')
    .where('id', id)
    .update({'name': updateItemData.name,
            'description': updateItemData.description,
            'category': updateItemData.category,
            'price': updateItemData.price,
            'picture': updateItemData.picture
    })
    .then(x => {
      console.log(x)
    })
}







module.exports = {
  showItems,
  showItem,
  findItem,
  newUser,
  findUser,
  showCategories,
  addItem,
  showUserIds,
  updateListing,
}