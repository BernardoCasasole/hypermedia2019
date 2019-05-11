'use strict';

let db;

exports.booksDbSetup = function(database) {
  db = database;
  console.log("Checking if books table exists...");
  return database.schema.hasTable("books").then(exists => {
    if (!exists) {
      console.log("It doesn't!");
    } else {
      console.log('Ok.');
    }
  });
}

/**
 * Books available in the inventory
 * List of books available in the inventory
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.booksGET = function(offset,limit) {
  if( limit === undefined || limit<=0 || limit === NaN) {
    limit = 20
  }
  return db('books')
    .limit(limit)
    .offset(offset)
    .then(data => {
      return data.map(e => {
        e.price = { price: e.price, currency: e.currency };
        return e;
      });
    });
}


/**
 * Finds book by ID
 * Returns a book
 *
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getBookById = function(bookId) {
  console.log("getBookById started, id:" +bookId)
  return db.select()
  .from('books')
  .where('id', bookId);
}

