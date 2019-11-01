
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        { id: 8881, name: 'hammer', description: 'Multipurpose, every household must have it', category: 'tools', price: 15.00, user_id: 1, picture: 'hammer.jpg' },
        { id: 8882, name: 'screwdriver', description: 'Another multipurpose miracle that will turn *literally* your world around', category: 'tools', price: 10.00, user_id: 1, picture: 'screwdriver.jpg' },
        { id: 8883, name: 'drill', description: 'Turns things into other things', category: 'tools', price: 25.00, user_id: 1, picture: 'drill.jpg' },
        { id: 8884, name: 'hat', description: 'Something to cover that bald spot of yours', category: 'clothing', price: 19.00, user_id: 2, picture: 'hat.jpg' },
        { id: 8885, name: 'coat', description: 'Make sure you look cool always, everywhere', category: 'clothing', price: 80.00, user_id: 2, picture: 'coat.jpg' },
        { id: 8886, name: 'sofa', description: 'Just to prove that this isnt a cheap scam site. Here something expensive!', category: 'furniture', price: 400.00, user_id: 3, picture: 'sofa.jpg' },

      ]);
    });
};
