'use strict';


let db;

exports.usersDbSetup = function(database) {
  db = database;
  console.log("Checking if users table exists...");
  return database.schema.hasTable("users").then(exists => {
    if (!exists) {
      console.log("It doesn't!");
    } else {
      console.log('Ok.');
    }
  });
}

/**
 * retrieve a user, based on cookies
 * returns a specific user, based on cookies and login done before
 *
 * returns User
 **/
exports.getUser = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "name" : "Vittorio",
  "address" : "DEIB",
  "creditcard" : "xyzabc"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

/**
 * Login
 * Login with a form
 *
 * username String 
 * password String 
 * no response value expected for this operation
 **/
exports.userLoginPOST = function(username,password) {
  //TODO when cookies are in!
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Register
 * Register into the store
 *
 * body User 
 * no response value expected for this operation
 **/
exports.userRegisterPOST = function(body) {
  return db('users').insert({
    name: body.name,
    email: body.email //or email:body.address? in swagger was defined address not email
  })
  
}

