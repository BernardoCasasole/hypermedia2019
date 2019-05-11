
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'Guida galattica per autostoppisti', author: 'Douglas Adams', qty: 42, price: 24.20, 
          currency:'eur', status: 'available'},
        {id: 2, title: 'Dirk Gently', author: 'Douglas Adams', qty: 0, price: 12.10, 
          currency:'eur', status: 'out of stock'},
        {id: 3, title: 'I Promessi Sposi', author: 'Alessandro Manzoni', qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
      ]);
    });
};
