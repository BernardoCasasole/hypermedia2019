
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('carts').del()
    .then(function () {
      return knex('users').del()
    .then(function () {
      return knex('events').del()
    .then(function () {
      return knex('books').del()
    .then(function () {
      return knex('authors').del();
    });
    });
    });
    });
};
