
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('category')
    table.float('price')
    table.integer('user_id')
    table.string('picture')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items')
};
