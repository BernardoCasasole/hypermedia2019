
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: "Mario Rossi", username:"Marius99", password:"mariorossi", email:"mariorossi@example.com", creditcardNumber: "asbc123", creditcardHolder: "Mario Rossi"},
        {id: 2, name: "Tizio T.", username:'Mr_T', password: "123abc", email:"tizio@example.com", creditcardNumber: "asbd1234", creditcardHolder: 'Tizio T.'},
        {id: 3, name: "Sempronio S.", username:'NonSempro', password: "qwerty", email:"sempro@example.com", creditcardNumber: "c4rd90", creditcardHolder: 'Alessandro Magno'},
        {id: 4, name: "a", username:'aaa', password: "a", email:"a@a.com", creditcardNumber: "aaaAAA", creditcardHolder: 'aa'}
      ]);
};
