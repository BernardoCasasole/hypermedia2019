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

exports.cartAddBook = function(userId, bookId, bookQty) {
  userId = parseInt("1");
  bookId = parseInt(bookId)
  bookQty = parseInt(bookQty)
  
  return db.select('content').from('carts')
  .where('user_id', userId).then(
    data => {
    let content;
    content = data[0].content.content;
    console.log("content taken from id " + userId)
    console.log(content)
    let alreadyIn = false;
    for(let i = 0; i < content.length; i++) {
      if(content[i].id === bookId) {
        alreadyIn = true;
        content[i].qty = content[i].qty+bookQty;
      }
    }
    if(!alreadyIn) {
      content.push({id: bookId, qty: bookQty})
    }
    console.log("content updated:")
    console.log(content)
    data[0].content.content = content;
    return db('carts').where('user_id', userId).update('content', data[0].content)
    }
  );
  
}

