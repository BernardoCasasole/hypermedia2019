
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('carts').insert([
    {user_id: 1, book_id:3, qty: 1},
    {user_id: 1, book_id:9, qty: 3},
    {user_id: 1, book_id:7, qty: 2},
    {user_id: 2, book_id:1, qty: 1},
    {user_id: 3, book_id:4, qty: 1},
    {user_id: 3, book_id:5, qty: 1},
    {user_id: 3, book_id:2, qty: 5},
    {user_id: 3, book_id:10, qty: 1},
    {user_id: 4, book_id:3, qty: 1},
    {user_id: 4, book_id:11, qty: 2}
  ]);
};
