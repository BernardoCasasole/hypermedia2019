
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, name:'E-vento', presentedBook: 'Via col vento', date:'5/5/2020', subscribers:12},
        {id: 2, name:'Event-ualmente', presentedBook: 'I Promessi Sposi', date:'2/5/2021', subscribers:2},
        {id: 3, name:'Prezentationz', presentedBook: 'Dirk Gently', date:'5/9/2019', subscribers:120}
      ]);
    });
};
