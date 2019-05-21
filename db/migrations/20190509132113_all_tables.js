

exports.up = function(knex, Promise) {
    console.log("authorsJS start")
    return knex.schema.createTable('authors', function(table) {
        table.increments('id');
        table.string('name').unique().notNullable();
        table.text('description');
        table.text('biography')
    })

    .createTable('books', function(table) {
        table.increments('id');
        table.text('title').notNullable();
        table.string('author').references('name').inTable('authors');
        table.integer('qty').notNullable();
        table.integer('soldQty').notNullable().defaultTo(0);
        table.float('price').notNullable();
        table.string('currency').notNullable();
        table.text('caption');
        table.enum('status', ['available', 'out of stock']);
        table.enum('theme1', ['all', 'economy', 'love', 'nature', 'friendship', 'courage', 'war', 'death', 'lifestyle']);
        table.enum('theme2', ['all', 'economy', 'love', 'nature', 'friendship', 'courage', 'war', 'death', 'lifestyle']);
        table.enum('theme3', ['all', 'economy', 'love', 'nature', 'friendship', 'courage', 'war', 'death', 'lifestyle']);
        table.enum('genres', ['all', 'biography', 'fantasy', 'adventure', 'romance', 'travel', 'thriller', 'crime', 'kids', 'geopolitical', 'finance']);
        table.boolean('isSponsored');
        table.text('isbn');
        table.text('description');
        table.text('additional_info');
        table.text('reviews');
    })

    .createTable('events', function(table) {
        table.increments('id');
        table.integer('author');
        table.string('name').notNullable();
        table.string('presentedBook');
        table.date('date');
        table.text('details');
        table.integer('subscribers').notNullable().defaultTo(0);
    })

    .createTable('users', function(table) {
        table.increments('id');
        table.string('name').unique().notNullable();
        table.string('password').notNullable();
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
