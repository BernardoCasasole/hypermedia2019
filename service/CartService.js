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
  return db.select()
  .from('carts')
  .where('user_id', userId)
}

exports.cartAddBook = function(userId, bookId) {
  userId = 1;
  let content = db().select('content').from('carts')
  .where('user_id', userId)
  console.log("content taken from id " + userId)
  console.log(content)
  if (content[bookId] === undefined) {
    content[bookId] = 0;
  }
  content[bookId] = content[bookId] + 1;
  console.log("content updated:")
  console.log(content)
}

