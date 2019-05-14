
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'Becoming', author: 'Michelle Obama', qty: 42, price: 24.20, 
          currency:'eur', status: 'available'},
        {id: 2, title: 'Remarkable Creatures', author: 'Tracy Chevalier', qty: 0, price: 12.10, 
          currency:'eur', status: 'out of stock'},
        {id: 3, title: 'The next 100 years', author: 'George Friedman', qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 4, title: 'A song of ice and fire', author: 'George Martin', qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 5, title: 'Sostiene Pereira', author: 'Antonio Tabucchi', qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 6, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 7, title: 'The Testaments', author: 'Margaret Atwood', qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 8, title: 'Girl, Stop Apologizing', author: 'Rachel Hollis', qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 9, title: 'Educated', author: 'Tara Westover', qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 10, title: 'Prisoners of Geography', author: 'Tim Marshall', qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
        {id: 11, title: 'Old man and the sea', author: 'Ernest Hemingway', qty: 250, price: 38.20, 
          currency:'eur', status: 'available'},
      ]);
    });
};
