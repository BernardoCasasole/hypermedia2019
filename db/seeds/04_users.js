
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: "Mario Rossi", email:"mariorossi@example.com", creditcard: "asbc123"},
        {id: 2, name: "Tizior", email:"tizio@example.com", creditcard: "asbd1234"},
        {id: 3, name: "Sempronios", email:"sempro@example.com", creditcard: "c4rd90"}
      ]);
    });
};
