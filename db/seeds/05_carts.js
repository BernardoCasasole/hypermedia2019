
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('carts').insert([
        {user_id: 1, total:200.21, content: {content:[{id:1, qty:3},{id:5, qty:1}]}  },
        {user_id: 3, total:12.21, content:{content:[{id:3, qty:1}, {id:6, qty:1}, {id:8, qty:1}, {id:9, qty:1}]} }
      ]);
};
