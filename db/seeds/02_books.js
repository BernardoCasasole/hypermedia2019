
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'Becoming', author: 1, qty: 42, price: 24.20, 
          currency:'eur', status: 'available'},
        {id: 2, title: 'Old man and the sea', author: 2, qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 3, title: 'Remarkable Creatures', author: 3, qty: 0, price: 12.10, 
          currency:'eur', status: 'out of stock'},
        {id: 4, title: 'The next 100 years', author: 4, qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 5, title: 'A song of ice and fire', author: 5, qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 6, title: 'Sostiene Pereira', author: 6, qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 7, title: 'Rich Dad Poor Dad', author: 7, qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 8, title: 'The Testaments', author: 8, qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 9, title: 'Girl, Stop Apologizing', author: 9, qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 10, title: 'Educated', author: 10, qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 11, title: 'Prisoners of Geography', author: 11, qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        
      ]);
    });
};
