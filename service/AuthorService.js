'use strict';


/**
 * Authors present in our website
 * List of authors  present in our website
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.authorsGET = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "name" : "Luigi",
  "surname" : "Pirandello",
  "books" : [ {
    "id" : 0,
    "title" : "La roba",
    "author" : "Luigi Pirandello",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
  }, {
    "id" : 1,
    "title" : "Uno nessuno centomila",
    "author" : "Luigi Pirandello",
    "price" : {
      "value" : 20,
      "currency" : "eur"
    }
  } ]
}, {
  "id" : 0,
  "name" : "Luigi",
  "surname" : "Pirandello",
  "books" : [ {
    "id" : 0,
    "title" : "La roba",
    "author" : "Luigi Pirandello",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
  }, {
    "id" : 1,
    "title" : "Uno nessuno centomila",
    "author" : "Luigi Pirandello",
    "price" : {
      "value" : 20,
      "currency" : "eur"
    }
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find author by ID
 * Returns an author
 *
 * authorId Long ID of author to return
 * returns Author
 **/
exports.getAuthorById = function(authorId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "Luigi",
  "surname" : "Pirandello",
  "books" : [ {
    "id" : 0,
    "title" : "La roba",
    "author" : "Luigi Pirandello",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
  }, {
    "id" : 1,
    "title" : "Uno nessuno centomila",
    "author" : "Luigi Pirandello",
    "price" : {
      "value" : 20,
      "currency" : "eur"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

