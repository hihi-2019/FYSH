
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 9991, name: 'buyer', email: 'buyer@gmail.com', username: 'buyer1234' },
        { id: 9992, name: 'john', email: 'john@gmail.com', username: 'john1234' },
        { id: 9993, name: 'susan', email: 'susan@gmail.com', username: 'susan1234' },
      ]);
    });
};
