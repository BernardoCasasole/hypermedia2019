'use strict';


let db;

exports.cartsDbSetup = function(database) {
  db = database;
  return database.schema.hasTable("carts").then(exists => {
    console.log("Checking if carts table exists...");
    if (!exists) {
      console.log("It doesn't!");
    } else {
      console.log('Ok.');
    }
  });
}

/**
 * View the content of the cart
 *
 * cartId Long 
 * returns Cart
 **/
exports.cartGET = function(userId) {
  return db
  .from('carts')
  .where('user_id', userId)
  .join('books', 'carts.book_id', '=', 'books.id')
  .select('id', 'qty', 'title', 'price', 'currency')
}

//add a row in carts table
exports.cartAddBookAdd = function(userId, bookId, newBookQty) {
  return db('carts')
    .insert({book_id:bookId, user_id:userId, qty:newBookQty})
}

//update a row in the cart. the update replaces the old qty
exports.cartAddBookUpdate = function(userId, bookId, newBookQty) {
  return db('carts')
  .where('user_id', userId)
  .andWhere('book_id', bookId)
  .update({qty: newBookQty})
}

//check if a specific row exists already
exports.cartCheck = function(userId, bookId) {
  return db.select()
  .from('carts')
  .where('book_id', bookId)
  .andWhere('user_id', userId)
}

exports.cartDelete = function(userId, bookId) {
  return db('carts')
  .where('book_id', bookId)
  .andWhere('user_id', userId)
  .del();
}