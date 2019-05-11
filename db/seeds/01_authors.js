
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {id: 1, name:'Alessandro', surname:'Manzoni'},
        {id: 2, name: 'Luigi', surname:'Pirandello'},
        {id: 3, name: 'Douglas', surname: 'Adams'}
      ]);
    });
};
