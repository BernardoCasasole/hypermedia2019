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

