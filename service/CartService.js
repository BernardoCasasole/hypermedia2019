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
exports.cartGET = function(user_id) {
  //TODO WHEN cookies are in!
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : {
    "currency" : "eur",
    "value" : 101.17
  },
  "books" : [ {
    "id" : 0,
    "title" : "Il deserto dei tartari",
    "author" : "Dino Buzzati",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
  }, {
    "id" : 0,
    "title" : "Il deserto dei tartari",
    "author" : "Dino Buzzati",
    "price" : {
      "value" : 10,
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

