
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'Becoming', author: 1, qty: 42, soldQty:22, price: 24.20, 
          currency:'eur', status: 'available', isbn: '978-3-16-148410-1'},
        {id: 2, title: 'The old man and the sea', author: 2, qty: 250, soldQty:22, price: 38.20, 
          currency:'eur', status: 'available', isbn: '978-3-16-148410-2'},
        {id: 3, title: 'Remarkable Creatures', author: 3, qty: 0, soldQty:22, price: 12.10, 
          currency:'eur', status: 'out of stock', isbn: '978-3-16-148410-3'},
        {id: 4, title: 'The next 100 years', author: 4, qty: 250, soldQty:22, price: 38.20, 
          currency:'eur', status: 'available', isbn: '978-3-16-148410-4'},
        {id: 5, title: 'A song of ice and fire', author: 5, qty: 250, soldQty:22, price: 38.20, 
          currency:'eur', status: 'available', isbn: '978-3-16-148410-5'},
        {id: 6, title: 'Sostiene Pereira', author: 6, qty: 250, soldQty:22, price: 38.20, 
          currency:'eur', status: 'available', isbn: '978-3-16-148410-6'},
        {id: 7, title: 'Rich Dad Poor Dad', author: 7, qty: 250, soldQty:22, price: 38.20, 
          currency:'eur', status: 'available', isbn: '978-3-16-148410-7'},
        {id: 8, title: 'The Testaments', author: 8, qty: 250, soldQty:22, price: 38.20, 
          currency:'eur', status: 'available', isbn: '978-3-16-148410-8'},
        {id: 9, title: 'Girl, Stop Apologizing', author: 9, qty: 250, soldQty:22, price: 38.20, 
          currency:'eur', status: 'available', isbn: '978-3-16-148410-9'},
        {id: 10, title: 'Educated', author: 10, qty: 250, soldQty:22, price: 38.20, 
          currency:'eur', status: 'available', isbn: '978-3-16-148410-10'},
        {id: 11, title: 'Prisoners of Geography', author: 11, qty: 250, soldQty:22, price: 38.20, 
          currency:'eur', status: 'available', isbn: '978-3-16-148410-11'},
        
      ]);
};
