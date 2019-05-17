
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, name:'The next 100 years', presentedBook: 'The next 100 years', date:'3/11/2019', subscribers:12},
        {id: 2, name:'Rich Dad Poor Dad', presentedBook: 'Rich Dad Poor Dad', date:'19/12/2019', subscribers:2},
        {id: 3, name:'Prisoners of Geography', presentedBook: 'Prisoners of Geography', date:'7/10/2019', subscribers:120},
        {id: 4, name:'Educated', presentedBook: 'Educated', date:'5/9/2019', subscribers:120},
        {id: 5, name:'The Testaments', presentedBook: 'The Testaments', date:'20/10/2019', subscribers:120}
      ]);
    });
};
