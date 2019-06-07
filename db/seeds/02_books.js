
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'Becoming', author: 1, stockQty: 42, soldQty:22, price: 24.20, 
          currency:'€', status: 'available', theme1:'love', theme2:'courage', theme3:'lifestyle',
          genres: 'biography', isSponsored:'true', isbn: '978-3-16-148410-1', reviews: 'User1: Good; User2: Well written; User3: Didn\'t appreciated it', 
          description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
        
        {id: 2, title: 'The old man and the sea', author: 2, stockQty: 250, soldQty:22, price: 31.55, 
          currency:'€', status: 'available',  theme1: 'death', theme2:'nature', theme3:'friendship', 
          genres: 'travel',isSponsored:'false', isbn: '978-3-16-148410-2', reviews: 'User1: Good; User2: Well written', 
          description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
        
        {id: 3, title: 'Remarkable Creatures', author: 3, stockQty: 0, soldQty:22, price: 12.10, 
          currency:'€', status: 'out of stock', theme1:'love', theme2:'death', theme3:'war', 
          genres: 'fantasy', isSponsored:'true', isbn: '978-3-16-148410-3', reviews: 'User1: Good', 
          description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
        
        {id: 4, title: 'The next 100 years', author: 4, stockQty: 250, soldQty:22, price: 19.33, 
          currency:'€', status: 'available',theme1:'war', 
          genres: 'geopolitical', isSponsored:'false', isbn: '978-3-16-148410-4', reviews: 'User2: Well written; User3: Didn\'t appreciated it', 
          description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
        
        {id: 5, title: 'A song of ice and fire', author: 5, stockQty: 250, soldQty:22, price: 43.70, 
          currency:'€', status: 'available', theme1:'war', theme2:'courage', theme3:'friendship', 
          genres: 'fantasy', isSponsored:'true', isbn: '978-3-16-148410-5', reviews: 'User1: Good; User2: Well written; User3: Didn\'t appreciated it', 
          description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
      
        {id: 6, title: 'Sostiene Pereira', author: 6, stockQty: 250, soldQty:22, price: 18.80, 
        currency:'€', status: 'available', theme1:'courage', theme2:'war', 
        genres: 'biography', isSponsored:'false', isbn: '978-3-16-148410-6', reviews: 'User1: Good; User2: Well written; User3: Didn\'t appreciated it', 
        description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
      
        {id: 7, title: 'Rich Dad Poor Dad', author: 7, stockQty: 250, soldQty:22, price: 29.99, 
        currency:'€', status: 'available', theme1:'lifestyle', theme2: 'economy', 
        genres: 'finance', isSponsored:'false', isbn: '978-3-16-148410-7', reviews: 'User1: Good; User2: Well written; User3: Didn\'t appreciated it', 
        description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
      
        {id: 8, title: 'The Testaments', author: 8, stockQty: 250, soldQty:22, price: 22.75, 
        currency:'€', status: 'available',theme1:'courage', 
        genres: 'biography', isSponsored:'false', isbn: '978-3-16-148410-8', reviews: 'User1: Good; User2: Well written; User3: Didn\'t appreciated it',
        description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
      
        {id: 9, title: 'Girl, Stop Apologizing', author: 9, stockQty: 250, soldQty:22, price: 21.09, 
        currency:'€', status: 'available', theme1:'love', theme2:'friendship', theme3:'lifestyle', 
        genres: 'biography', isSponsored:'false', isbn: '978-3-16-148410-9', reviews: 'User1: Good; User2: Well written; User3:', 
        description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
      
        {id: 10, title: 'Educated', author: 10, stockQty: 250, soldQty:22, price: 26.60, 
        currency:'€', status: 'available', theme1:'courage', theme2:'friendship', theme3:'lifestyle', 
        genres: 'biography', isSponsored:'false', isbn: '978-3-16-148410-10', reviews: 'User1: Good;', 
        description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
      
        {id: 11, title: 'Prisoners of Geography', author: 11, stockQty: 250, soldQty:22, price: 11.99, 
        currency:'€', status: 'available', theme1:'war', theme2:'economy', 
        genres: 'geopolitical', isSponsored:'true', isbn: '978-3-16-148410-11', reviews: 'User1: Good; User2: Well written', 
        description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
        
      ]);
};
