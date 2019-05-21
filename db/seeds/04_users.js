
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: "Mario Rossi", password:"mariorossi", email:"mariorossi@example.com", creditcard: "asbc123"},
        {id: 2, name: "Tizior", password: "123abc", email:"tizio@example.com", creditcard: "asbd1234"},
        {id: 3, name: "Sempronios", password: "qwerty", email:"sempro@example.com", creditcard: "c4rd90"}
      ]);
};
