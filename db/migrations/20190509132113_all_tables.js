

exports.up = function(knex, Promise) {
    console.log("authorsJS start")
    return knex.schema.createTable('authors', function(table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('description');
        table.string('biography')
        table.list('books').notNullable();
    })

    .createTable('books', function(table) {
        table.increments('id');
        table.text('title').notNullable();
        table.string('author');//.references('id').inTable('authors');
        table.integer('qty').notNullable();
        table.float('price').notNullable();
        table.text('caption');
        table.enum('status', ['available', 'out of stock']);
        table.text('isbn');
        table.list('categories');
        table.text('description');
        table.text('additional_info');
        table.text('reviews');
        table.list('tags');
    })

    .createTable('events', function(table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('presentedBook');
        table.string('date');
        table.text('detalis');
        table.integer('subscribers').notNullable().defaultTo(0);
    })

    .createTable('users', function(table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('creditcard');
    })
  
    
    .createTable('carts', function(table) {
        table.integer('user_id').references('id').inTable('users').unique();
        table.float('total');
        table.text('books');
    })

    
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('carts')
  .dropTable('users')
  .dropTable('events')
  .dropTable('books')
  .dropTable('authors');

};
