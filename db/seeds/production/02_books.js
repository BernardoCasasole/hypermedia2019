
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('books').insert([
        {id: 1, title: 'Becoming', author: 1, stockQty: 42, soldqty:610, price: 24.20, 
          currency:'€', status: 'available', theme1:'love', theme2:'courage', theme3:'lifestyle',
          genres: 'biography', issponsored:true, isbn: '978-3-16-148410-1', reviews: 'Violet Stevenson< A good book, one of the best I\'ve read this year. Deep and interesting. I recommend it < 4 <Rian Tunner< An appreciable book, not particularly noteworthy but still a pleasant read. It contains innumerable food for thought. I would recommend it. < 3 <Elizabeth Morrison< A particularly interesting book, not exactly my kind, but I read it with particular interest. < 4 <Flynn Cook< A particularly interesting book, not exactly my kind, but I read it with particular interest. < 4', 
          description: 'Becoming is the memoir of former United States First Lady Michelle Obama published in 2018. Described by the author as a deeply personal experience,  the book talks about her roots and how she found her voice, as well as her time in the White House, her public health campaign, and her role as a mother.  ', caption: '"Becoming" will be the book of autumn, and not only in Italy: everywhere. - Valeria Palermi' },
        
        {id: 2, title: 'The old man and the sea', author: 2, stockQty: 250, soldqty:744, price: 21.50, 
          currency:'€', status: 'available',  theme1: 'death', theme2:'nature', theme3:'friendship', 
          genres: 'travel',issponsored:false, isbn: '978-3-16-148410-2', reviews: 'Rian Tunner< I really liked the book, it is perhaps one of the author\'s best works. The end is particularly interesting. I highly recommend it. < 5 < Kristen Baker< A good book, although it is not excellent. A bit slow and not particularly interesting, it is still a pleasant book to read. < 3 <Violet Stevenson< A particularly interesting book, not exactly my kind, but I read it with particular interest. < 4 <Flynn Cook< A good book, one of the best I\'ve read this year. Deep and interesting. I recommend it < 4 <Elizabeth Morrison< A good book, although it is not excellent. A bit slow and not particularly interesting, it is still a pleasant book to read. < 3 ', 
          description: 'The Old Man and the Sea is a short novel written by the American author Ernest Hemingway in 1951 in Cuba, and published in 1952.  It was the last major work of fiction by Hemingway that was published during his lifetime. ', caption: '  A short novel written by the American author Ernest Hemingway' },
        
        {id: 3, title: 'Remarkable Creatures', author: 3, stockQty: 5, soldqty:545, price: 12.10, 
          currency:'€', status: 'available', theme1:'love', theme2:'death', theme3:'war', 
          genres: 'fantasy', issponsored:false, isbn: '978-3-16-148410-3', reviews: 'Elizabeth Morrison< A good book, although it is not excellent. A bit slow and not particularly interesting, it is still a pleasant book to read. < 3 <Flynn Cook< I really liked the book, it is perhaps one of the author\'s best works. The end is particularly interesting. I highly recommend it. < 5 < Rachel Anderson< An appreciable book, not particularly noteworthy but still a pleasant read. It contains innumerable food for thought. I would recommend it. < 3 <Flynn Cook< A particularly interesting book, not exactly my kind, but I read it with particular interest. < 4 ', 
          description: 'Is a 2009 historical genre novel by Tracy Chevalier, set between Lyme Regis and London in the early nineteenth century. ', caption: 'Historical figures have rarely been so cleverly used, says Ruth Padel. ' },
        
        {id: 4, title: 'The next 100 years', author: 4, stockQty: 250, soldqty:401, price: 19.20, 
          currency:'€', status: 'available',theme1:'war', 
          genres: 'geopolitical', issponsored:false, isbn: '978-3-16-148410-4', reviews: 'Kristen Baker< A good book, although it is not excellent. A bit slow and not particularly interesting, it is still a pleasant book to read. < 3 <Rian Tunner< A particularly interesting book, not exactly my kind, but I read it with particular interest. < 4 <Elizabeth Morrison< A good book, one of the best I\'ve read this year. Deep and interesting. I recommend it < 4 ', 
          description: 'The Next 100 Years is a 2009 book by George Friedman. In the book, Friedman attempts to predict the major geopolitical events and trends of the 21st century. Friedman also speculates in the book on changes in technology and culture that may take place during this period.   ', caption: 'Friedman attempts to predict the major geopolitical events and trends of the 21st century. ' },
        
        {id: 5, title: 'A song of ice and fire', author: 5, stockQty: 250, soldqty:832, price: 23.70, 
          currency:'€', status: 'available', theme1:'war', theme2:'courage', theme3:'friendship', 
          genres: 'fantasy', issponsored:true, isbn: '978-3-16-148410-5', reviews: 'Elizabeth Morrison< A good book, although it is not excellent. A bit slow and not particularly interesting, it is still a pleasant book to read. < 3 <Rian Tunner< I really liked the book, it is perhaps one of the author\'s best works. The end is particularly interesting. I highly recommend it. < 5 < Flynn Cook< A particularly interesting book, not exactly my kind, but I read it with particular interest. < 4 ', 
          description: 'A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin. He began the first volume of the series, A Game of Thrones, in 1991, and it was published in 1996. Martin, who initially envisioned the series as a trilogy, has published five out of a planned seven volumes. The fifth and most recent volume of the series published in 2011, A Dance with Dragons, took Martin six years to write. He is currently writing the sixth novel, The Winds of Winter.', caption: ' A series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin  ' },
      
        {id: 6, title: 'Sostiene Pereira', author: 6, stockQty: 250, soldqty:921, price: 18.80, 
        currency:'€', status: 'available', theme1:'courage', theme2:'war', 
        genres: 'fiction', issponsored:false, isbn: '978-3-16-148410-6', reviews: 'Kristen Baker< A particularly interesting book, not exactly my kind, but I read it with particular interest. < 4 <Flynn Cook< A good book, one of the best I\'ve read this year. Deep and interesting. I recommend it < 4 <Violet Stevenson< An appreciable book, not particularly noteworthy but still a pleasant read. It contains innumerable food for thought. I would recommend it. < 3 ', 
        description: 'The novel is set in Lisbon in 1938, in the midst of the Salazar dictatorial regime. Dr. Pereira is a journalist who has abandoned the crime headings to edit the cultural column of an afternoon newspaper in the city, the Lisboa. A completely mediocre character, he is a quiet man, with no ideas or political positions, devoted only to literature, the French in particular, and to the memory of his wife, who had died a few years of phthisis, to whose portrait he continues to speak every day. Pereira is also cardiopathic, obese and very routine (he dines every day at the Café Orquidea always ordering the same things, omelette and lemonade).', caption: ' A novel by Antonio Tabucchi, published by Feltrinelli in 1994.' },
      
        {id: 7, title: 'Rich Dad Poor Dad', author: 7, stockQty: 250, soldqty:1022, price: 29.99, 
        currency:'€', status: 'available', theme1:'lifestyle', theme2: 'economy', 
        genres: 'finance', issponsored:false, isbn: '978-3-16-148410-7', reviews: 'Elizabeth Morrison< Not a book that I particularly appreciated. Although it is written with particular care, it is not my kind of book. A purchase of which I am not fully satisfied. < 2 <Rian Tunner< I really liked the book, it is perhaps one of the author\'s best works. The end is particularly interesting. I highly recommend it. < 5 < Kristen Baker< A particularly interesting book, not exactly my kind, but I read it with particular interest. < 4 ', 
        description: 'Rich Dad Poor Dad is a 1997 book written by Robert Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy (financial education), financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one\'s financial intelligence (financial IQ) to improve one\'s business and financial aptitude.  ', caption: 'Rich Dad Poor Dad: What the Rich Teach Their Kids About Money ' },
      
        {id: 8, title: 'The Testaments', author: 8, stockQty: 250, soldqty:281, price: 22.00, 
        currency:'€', status: 'available',theme1:'courage', 
        genres: 'fiction', issponsored:false, isbn: '978-3-16-148410-8', reviews: 'Rian Tunner< A particularly interesting book, not exactly my kind, but I read it with particular interest. < 4 <Rachel Anderson< A good book, one of the best I\'ve read this year. Deep and interesting. I recommend it < 4 ',
        description: 'The Testaments is a novel by Margaret Atwood, slated for publication in 2019.  A sequel to her 1985 novel The Handmaid\'s Tale,  the novel will take place 15 years after Offred\'s final scene in the original novel, and will be narrated by three female characters.   ', caption: ' The Testaments is a novel by Margaret Atwood, slated for publication in 2019' },
      
        {id: 9, title: 'Girl, Stop Apologizing', author: 9, stockQty: 250, soldqty:611, price: 21.00, 
        currency:'€', status: 'available', theme1:'love', theme2:'friendship', theme3:'lifestyle', 
        genres: 'biography', issponsored:false, isbn: '978-3-16-148410-9', reviews: 'Flynn Cook< I really liked the book, it is perhaps one of the author\'s best works. The end is particularly interesting. I highly recommend it. < 5 < Rian Tunner< Not a book that I particularly appreciated. Although it is written with particular care, it is not my kind of book. A purchase of which I am not fully satisfied. < 2 ', 
        description: 'Girl, Stop Apologizing: A Shame-Free Plan for Embracing and Achieving Your Goals is a Self-help book by Rachel Hollis. It follows her 2018 best-seller Girl, Wash Your Face.  It was both a Publishers Weekly and The New York Times best-seller.  ', caption: 'A Shame-Free Plan for Embracing and Achieving Your Goals [Rachel Hollis] ' },
      
        {id: 10, title: 'Educated', author: 10, stockQty: 250, soldqty:199, price: 26.60, 
        currency:'€', status: 'available', theme1:'courage', theme2:'friendship', theme3:'lifestyle', 
        genres: 'biography', issponsored:true, isbn: '978-3-16-148410-10', reviews: 'Rian Tunner< A good book, although it is not excellent. A bit slow and not particularly interesting, it is still a pleasant book to read. < 3 <Elizabeth Morrison< A good book, one of the best I\'ve read this year. Deep and interesting. I recommend it < 4 <Rachel Anderson< A particularly interesting book, not exactly my kind, but I read it with particular interest. < 4 ', 
        description: 'In 2018, Penguin Random House published Westover\'s Educated: A Memoir, which tells the story of her struggle to reconcile her desire for education and autonomy with her family\'s rigid ideology. The book was an instant #1 New York Times bestseller, and was positively reviewed by the New York Times ', caption: 'Story of her struggle to reconcile her desire for education and autonomy with her family\'s rigid ideology ' },
      
        {id: 11, title: 'Prisoners of Geography', author: 11, stockQty: 250, soldqty:220, price: 11.99, 
        currency:'€', status: 'available', theme1:'war', theme2:'economy', 
        genres: 'geopolitical', issponsored:true, isbn: '978-3-16-148410-11', reviews: 'Rachel Anderson< Not a book that I particularly appreciated. Although it is written with particular care, it is not my kind of book. A purchase of which I am not fully satisfied. < 2 <Kristen Baker< A good book, one of the best I\'ve read this year. Deep and interesting. I recommend it < 4', 
        description: 'Prisoners of Geography describes the impact geography can have on international affairs, offering an explanation for such geopolitical events as Russia\'s annexation of Crimea based on Russia\'s need to retain access to warm-water ports and China\'s actions in Tibet to enforce its border with India. ', caption: ' Ten Maps That Tell You Everything You Need To Know About Global Politics ' },

        {id: 12, title:'Tales from the Shadowhunter Academy', author: 12, author2: 13, author3: 14, author4: 15, stockQty: 198, soldqty: 560, price:22.90,
        currency:'€', status: 'available', theme1:'friendship', theme2:'courage', 
        genres:'fantasy', issponsored:false, isbn: '978-3-16-148410-12', reviews: 'Violet Stevenson< A good book, one of the best I\'ve read this year. Deep and interesting. I recommend it < 4 <Flynn Cook< I really liked the book, it is perhaps one of the author\'s best works. The end is particularly interesting. I highly recommend it. < 5 < Rachel Anderson< A good book, although it is not excellent. A bit slow and not particularly interesting, it is still a pleasant book to read. < 3 <Flynn Cook< A good book, although it is not excellent. A bit slow and not particularly interesting, it is still a pleasant book to read. < 3 ',
        description: 'Simon Lewis has been a human and a vampire, and now he is becoming a Shadowhunter. The events of City of Heavenly Fire left him stripped of his memories, and Simon isn\'t sure who he is anymore. So when the Shadowhunter Academy reopens, Simon throws himself into this new world of demon-hunting, determined to find himself again. Whomever this new Simon might be.', caption:'Tales from the SW Academy'},

        {id:13, title:'Gli ultimi tre giorni di Fernando Pessoa', author: 6, stockQty: 24, soldqty: 449, price: 18.50,
        currency:'€', status: 'available', theme1:'death',
        genres: 'fiction', issponsored:false, isbn: '978-3-16-148410-13', reviews: 'Kristen Baker< A good book, although it is not excellent. A bit slow and not particularly interesting, it is still a pleasant book to read. < 3 <Violet Stevenson< A particularly interesting book, not exactly my kind, but I read it with particular interest. < 4 <Elizabeth Morrison< An appreciable book, not particularly noteworthy but still a pleasant read. It contains innumerable food for thought. I would recommend it. < 3 ',
        description: 'An imaginary biographic novel in which Tabucchi, with tenderness and passion, describes the death of one of the greatest 900\'s writers.', caption: 'Tabucchi\'s book about Pessoa'}
      ]);
};
