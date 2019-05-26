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
exports.getUser = function(user_id) {
  return db.select()
  .from('users')
  .where('id', user_id)
}

/**
 * Login
 * Login with a form
 *
 * username String 
 * password String 
 * no response value expected for this operation
 * session is the req.session passed from User.js in controllers
 **/
exports.userLoginPOST = function(username,password) {
  return db.select()
  .from('users')
  .where('name', username)
  .where('password', password)
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


