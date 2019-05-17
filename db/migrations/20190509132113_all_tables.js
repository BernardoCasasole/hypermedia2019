

exports.up = function(knex, Promise) {
    console.log("authorsJS start")
    return knex.schema.createTable('authors', function(table) {
        table.increments('id');
        table.string('name').notNullable();
        table.text('description');
        table.text('biography')
    })

    .createTable('books', function(table) {
        table.increments('id');
        table.text('title').notNullable();
        table.integer('author');//.references('id').inTable('authors');
        table.integer('qty').notNullable();
        table.integer('soldQty').notNullable().defaultTo(0);
        table.float('price').notNullable();
        table.string('currency').notNullable();
        table.text('caption');
        table.enum('status', ['available', 'out of stock']);
        table.enum('themes', ['all', 'love', 'nature', 'friendship', 'courage', 'war', 'death', 'lifestyle']);
        table.enum('genres', ['all', 'biography', 'fantasy', 'adventure', 'romance', 'travel', 'thriller', 'crime', 'kids', 'geopolitical', 'finance']);
        table.text('isbn');
        table.json('categories');
        table.text('description');
        table.text('additional_info');
        table.text('reviews');
        table.json('tags');
    })

    .createTable('events', function(table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('presentedBook');
        table.date('date');
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
        table.json('content');
    })

    
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('carts')
  .dropTable('users')
  .dropTable('events')
  .dropTable('books')
  .dropTable('authors');

};
