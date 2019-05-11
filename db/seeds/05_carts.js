
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('carts').del()
    .then(function () {
      // Inserts seed entries
      return knex('carts').insert([
        {user_id: 1, total:200.21, books:"1,1;2,1;3,7"},
        {user_id: 3, total:12.21, books:"2,1"}
      ]);
    });
};
