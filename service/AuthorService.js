'use strict';

let db;

exports.authorsDbSetup = function(database) {
  db = database;
  console.log("Checking if authors table exists...");
  return database.schema.hasTable("authors").then(exists => {
    if (!exists) {
      console.log("It doesn't!");
    } else {
      console.log('Ok.');
    }
  });
}

/**
 * Authors present in our website
 * List of authors  present in our website
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.authorsGET = function(offset,limit) {
  if( limit === undefined || limit<=0 || limit === NaN) {
    limit = 20
  }
  return db('authors')
    .limit(limit)
    .offset(offset);
}


/**
 * Find author by ID
 * Returns an author
 *
 * authorId Long ID of author to return
 * returns Author
 **/
exports.getAuthorById = function(authorId) {
  return db.select()
  .from('authors')
  .where('id', authorId)
}



/**
 * Find author by name
 * Returns an author
 *
 * name String name of author to return
 * returns Author
 **/
exports.getAuthorByName = function(name) {
  return db.select()
  .from('authors')
  .where('name', name);
}

