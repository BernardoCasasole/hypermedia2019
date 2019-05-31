'use strict';


let db;
//user id index, for adding new users
let uIndex=4;

exports.usersDbSetup = function(database) {
  db = database;
  console.log("Checking if users table exists...");
  return database.schema.hasTable("users").then(exists => {
    if (!exists) {
      console.log("It doesn't!");
    } else {
      console.log('Ok.');
      //set the increment value
      db('users').max('id').then(data => {
        uIndex = data[0].max+1;
      })
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
  .where('username', username)
  .andWhere('password', password)
}





/**
 * Register
 * Register into the store
 *
 * body User 
 * no response value expected for this operation
 **/
exports.userRegisterPOST = function(body) {
  console.log(body.name + ', '+body.username+', uIndex:'+uIndex)
  return db('users').insert({
    id:uIndex,
    name: body.name,
    username: body.username,
    password: body.password,
    email: body.email,
    creditcardNumber: body.ccn,
    creditcardHolder: body.cch
  })
}

/**
 * get an existing user by username or email
 */
exports.getExistingUser = function(username, email) {
  return db.select()
  .from('users')
  .where('username', username)
  .orWhere('email', email)
}

exports.getUIndex = function() {
  return uIndex;
}

exports.IncrementUIndex = function() {
  uIndex++
}