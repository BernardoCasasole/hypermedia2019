'use strict';


let db;

exports.cartsDbSetup = function(database) {
  db = database;
  console.log("Checking if carts table exists...");
  return database.schema.hasTable("carts").then(exists => {
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
  console.log("adding a book, new row: uid:"+userId+", bid:"+bookId)
  return db('carts')
    .insert({book_id:bookId, user_id:userId, qty:newBookQty})
}

//update a row in the cart. the update replaces the old qty
exports.cartAddBookUpdate = function(userId, bookId, newBookQty) {
  console.log("updating a row in cart: uid:"+userId+", bid:"+bookId+ ",new Qty:"+newBookQty)
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