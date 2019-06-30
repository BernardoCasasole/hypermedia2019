'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');
let cookie = require('../utils/cookie.js');

module.exports.getUser = function getUser (req, res, next) {
  let user_id = req.session[cookie.uid];
  if(user_id === undefined) {
    utils.writeJson(res, [], 401)
  } //no user with id=0 exists, so will return a empty json
   else {
    User.getUser(user_id)
    .then(function (response) {
      if(response[0] === undefined)
        utils.writeJson(res, response, 401)
      else
        utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
   }
};

/**
 * NOTE:
 * The login is cookie-based, but without concern for security: the cookie simply is the user id.
 * In a real application an encryption and a usage of random cookies assignment would be used.
 * Being not security a concern according to the documentation of the project, the problem was not treated
 */
module.exports.userLoginPOST = function userLoginPOST (req, res, next) {
  let body = req.swagger.params['body'].value;
  let username = body.username;
  let password = body.password;

  if(username === undefined || password === undefined) {
    utils.writeJson(res, {success:false, error:"Incorrect username or password"}, 401);
  }

  //find the user with specified credentials
  User.userLoginPOST(username,password)
    .then(function (response) {
      let respCode = 200
      let finalRes = {success:false}
      //if response is undefined, answer with a json conainting success = false
      if(response[0] === undefined) {
        finalRes = {success:false, error:"Incorrect username or password"}
        respCode = 401
      }
      //else return the user plus the success value set to true
      else {
        //save the user id in the cookie if has logged in successfully
        req.session[cookie.uid] = response[0].id;
        finalRes = {success:true}
        respCode = 200
      }
      utils.writeJson(res, finalRes, respCode);
    })
    .catch(function () {
      let finalRes = {success:false}
      utils.writeJson(res, finalRes, 500);
    });
};


//user logout, remove the cookie
module.exports.userLogoutPOST = function userLogoutPOST (req, res, next) {
  //set the cookie to undefined to logout the user, whenever he was logged or not
  req.session[cookie.uid] = undefined;
  let response = {success:true}
  utils.writeJson(res, response, 200);
}


module.exports.userRegisterPOST = function userRegisterPOST (req, res, next) {
  let body = req.swagger.params['body'].value;
  let finalRes = {success:false}

  if(body === undefined || body.username === undefined || body.password === undefined) {
    finalRes.error = "Some registration data is missing (username or password are undefined)"
    utils.writeJson(res, finalRes, 400)
  }

  //find if exists already a user with same password or email
  User.getExistingUser(body.username, body.email)
  .then(function(response1) {

    //if no results are found, the new user is valid and can be registered
    if(response1[0] === undefined) {
      let uIndex = User.getUIndex()
      User.userRegisterPOST(body)
      .then(function(){//check if the insertion was successful by searching for inserted user
        User.getUser(uIndex)
        //then if insert was not successful, notify the failure
        .then(function(response2) {
          if(response2[0] === undefined) {
            finalRes.error = 'User could not be inserted'
            utils.writeJson(res, finalRes, 500);
          }//else if insert was successful, the answer is complete: set also the cookie and notify success 
          else {
            User.IncrementUIndex()
            req.session[cookie.uid] = response2[0].id
            finalRes.success = true
            utils.writeJson(res, finalRes, 200);
          }
          
        })
      })
      .catch(function (response) {
        utils.writeJson(res, response, 500)
      })
    } //else a result (or 2) was found, and cannot register 
    else {
      //if only 1 result or not both email and username exist for the same user, 
      //only username or email already exists
      if(response1[1] === undefined && 
              !(response1[0].username === body.username && response1[0].email === body.email)) {
        if(response1[0].username === body.username) {
          finalRes.error = "Username already in use"
        } else {
          finalRes.error = "Email already in use"
        }
      } else {
        finalRes.error = "Username and email already in use"
      }
      utils.writeJson(res, finalRes, 409);
    }

  })
  
};
