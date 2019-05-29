

exports.up = function(knex, Promise) {
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
        table.string('eventName').notNullable();
        table.string('presentedBook');
        table.date('date');
        table.text('details');
        table.integer('subscribers').notNullable().defaultTo(0);
    })

    .createTable('users', function(table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('username').unique().notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.string('creditcardNumber');
        table.string('creditcardHolder');
    })
  
    
    .createTable('carts', function(table) {
        table.integer('user_id').references('id').inTable('users').unique();
        table.float('total');
        table.json('content');
    })

    .createTable('sales', function(table) {
        table.integer('month');
        table.integer('year');
        table.integer('bookId');
        table.unique(['month', 'year', 'bookId']);
        table.integer('totalSold');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable('sales')
    .dropTable('carts')
    .dropTable('users')
    .dropTable('events')
    .dropTable('books')
    .dropTable('authors');

};
