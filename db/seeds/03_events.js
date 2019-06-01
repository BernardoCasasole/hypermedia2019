
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('events').insert([
        {eid: 1, author: 4, eventname:'The next 100 years - presentation', presentedBook: 4, date:'2019/5/3', subscribers:12,
        details: 'Mexico making a bid for global supremacy? Poland becoming America\'s closest ally? World War III taking place in space? It might sound fantastic but all these things can happen.'},

        {eid: 2, author: 7, eventname:'Rich Dad Poor Dad - presentation', presentedBook: 7, date:'2019/5/19', subscribers:2, 
        details: 'Rich Dad Poor Dad is Robert\'s story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you'},

        {eid: 3, author: 11, eventname:'Prisoners of Geography - presentation', presentedBook: 11, date:'2019/6/7', subscribers:120, 
        details: 'All leaders are constrained by geography. Their choices are limited by mountains, rivers, seas and concrete. Yes, to follow world events you need to understand people, ideas and movements – but if you don’t know geography, you’ll never have the full picture.'},

        {eid: 4, author: 10, eventname:'Educated - presentation', presentedBook: 10, date:'2019/7/5', subscribers:120,
        details: 'Educated is an account of the struggle for self-invention. It is a tale of fierce family loyalty, and of the grief that comes from severing one\'s closest ties. With the acute insight that distinguishes all great writers, Westover has crafted a universal coming-of-age story that gets to the heart of what an education is and what it offers: the perspective to see one\'s life through new eyes, and the will to change it. '},

        {eid: 5, author: 8, eventname:'The Testaments - presentation', presentedBook: 8, date:'2019/5/20', subscribers:120, 
        details: 'In this brilliant sequel to The Handmaid\'s Tale, acclaimed author Margaret Atwood answers the questions that have tantalized readers for decades. When the van door slammed on Offred\'s future at the end of The Handmaid\'s Tale, readers had no way of telling what lay ahead. With The Testaments, the wait is over.'}

      ]);
};
