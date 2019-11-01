
exports.up = function(knex, Promise) {
  return knex.schema.table('items', table => {
    table.string('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('items', table => {
    table.dropColumn('description')
  })
};
