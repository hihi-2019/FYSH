
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, name: 'hammer', category: 'tools', price: 15.00, user_id: 1, picture: 'hammer.jpg'},
        {id: 2, name: 'screwdriver', category: 'tools', price: 10.00, user_id: 1, picture: 'screwdriver.jpg'},
        {id: 3, name: 'drill', category: 'tools', price: 25.00, user_id: 1, picture: 'drill.jpg'},
        {id: 4, name: 'hat', category: 'clothing', price: 19.00, user_id: 2, picture: 'hat.jpg'},
        {id: 5, name: 'coat', category: 'clothing', price: 80.00, user_id: 2, picture: 'coat.jpg'},
        {id: 6, name: 'sofa', category: 'furnature', price: 400.00, user_id: 3, picture: 'sofa.jpg'},

      ]);
    });
};
