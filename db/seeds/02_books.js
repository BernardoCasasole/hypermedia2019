
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'Becoming', author: 1, stockQty: 42, soldQty:310, price: 24.20, 
          currency:'€', status: 'available', theme1:'love', theme2:'courage', theme3:'lifestyle',
          genres: 'biography', issponsored:true, isbn: '978-3-16-148410-1', reviews: 'User1: Good; User2: Well written; User3: Didn\'t appreciated it', 
          description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
        
        {id: 2, title: 'The old man and the sea', author: 2, stockQty: 250, soldQty:744, price: 31.55, 
          currency:'€', status: 'available',  theme1: 'death', theme2:'nature', theme3:'friendship', 
          genres: 'travel',issponsored:false, isbn: '978-3-16-148410-2', reviews: 'User1: Good; User2: Well written', 
          description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
        
        {id: 3, title: 'Remarkable Creatures', author: 3, stockQty: 0, soldQty:45, price: 12.10, 
          currency:'€', status: 'out of stock', theme1:'love', theme2:'death', theme3:'war', 
          genres: 'fantasy', issponsored:true, isbn: '978-3-16-148410-3', reviews: 'User1: Good', 
          description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
        
        {id: 4, title: 'The next 100 years', author: 4, stockQty: 250, soldQty:101, price: 19.33, 
          currency:'€', status: 'available',theme1:'war', 
          genres: 'geopolitical', issponsored:false, isbn: '978-3-16-148410-4', reviews: 'User2: Well written; User3: Didn\'t appreciated it', 
          description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
        
        {id: 5, title: 'A song of ice and fire', author: 5, stockQty: 250, soldQty:832, price: 43.70, 
          currency:'€', status: 'available', theme1:'war', theme2:'courage', theme3:'friendship', 
          genres: 'fantasy', issponsored:true, isbn: '978-3-16-148410-5', reviews: 'User1: Good; User2: Well written; User3: Didn\'t appreciated it', 
          description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
      
        {id: 6, title: 'Sostiene Pereira', author: 6, stockQty: 250, soldQty:921, price: 18.80, 
        currency:'€', status: 'available', theme1:'courage', theme2:'war', 
        genres: 'biography', issponsored:false, isbn: '978-3-16-148410-6', reviews: 'User1: Good; User2: Well written; User3: Didn\'t appreciated it', 
        description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
      
        {id: 7, title: 'Rich Dad Poor Dad', author: 7, stockQty: 250, soldQty:22, price: 29.99, 
        currency:'€', status: 'available', theme1:'lifestyle', theme2: 'economy', 
        genres: 'finance', issponsored:false, isbn: '978-3-16-148410-7', reviews: 'User1: Good; User2: Well written; User3: Didn\'t appreciated it', 
        description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
      
        {id: 8, title: 'The Testaments', author: 8, stockQty: 250, soldQty:181, price: 22.75, 
        currency:'€', status: 'available',theme1:'courage', 
        genres: 'biography', issponsored:false, isbn: '978-3-16-148410-8', reviews: 'User1: Good; User2: Well written; User3: Didn\'t appreciated it',
        description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
      
        {id: 9, title: 'Girl, Stop Apologizing', author: 9, stockQty: 250, soldQty:611, price: 21.09, 
        currency:'€', status: 'available', theme1:'love', theme2:'friendship', theme3:'lifestyle', 
        genres: 'biography', issponsored:false, isbn: '978-3-16-148410-9', reviews: 'User1: Good; User2: Well written; User3:', 
        description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
      
        {id: 10, title: 'Educated', author: 10, stockQty: 250, soldQty:99, price: 26.60, 
        currency:'€', status: 'available', theme1:'courage', theme2:'friendship', theme3:'lifestyle', 
        genres: 'biography', issponsored:false, isbn: '978-3-16-148410-10', reviews: 'User1: Good;', 
        description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },
      
        {id: 11, title: 'Prisoners of Geography', author: 11, stockQty: 250, soldQty:220, price: 11.99, 
        currency:'€', status: 'available', theme1:'war', theme2:'economy', 
        genres: 'geopolitical', issponsored:true, isbn: '978-3-16-148410-11', reviews: 'User1: Good; User2: Well written', 
        description: '“Anyone who tries to make a distinction between education and entertainment doesn’t know the first thing about either.”', caption: 'generic description of the book' },

        {id: 12, title:'Tales from the Shadowhunter Academy', author: 12, author2: 13, author3: 14, author4: 15, stockQty: 198, soldQty: 560, price:32.90,
        currency:'€', status: 'available', theme1:'friendship', theme2:'courage', 
        genres:'fantasy', issponsored:false, isbn: '978-3-16-148410-12', reviews: 'User1: As a fan, is very good!;',
        description: 'Simon Lewis has been a human and a vampire, and now he is becoming a Shadowhunter. The events of City of Heavenly Fire left him stripped of his memories, and Simon isn\'t sure who he is anymore. So when the Shadowhunter Academy reopens, Simon throws himself into this new world of demon-hunting, determined to find himself again. Whomever this new Simon might be.', caption:'description for Tales from the SW Academy'},

        {id:13, title:'Gli ultimi tre giorni di Fernando Pessoa', author: 6, stockQty: 24, soldQty: 49, price: 8.50,
        currency:'€', status: 'available', theme1:'death',
        genres: 'biography', issponsored:false, isbn: '978-3-16-148410-13', reviews: 'User1: Good; User2: Well written story about Pessoa',
        description: 'An imaginary biographic novel in which Tabucchi, with tenderness and passion, describes the death of one of the greatest 900\'s writers.', caption: 'Generic description of Tabucchi\'s book about Pessoa'}
      ]);
};
