'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');
let cookie = require('../utils/cookie.js');

module.exports.getUser = function getUser (req, res, next) {
  let user_id = req.session[cookie.uid];
  if(user_id === undefined) {
    console.log("user_id undefined, setting it to 0")
    user_id = 0
  } //no user with id=0 exists, so will return a empty json

  User.getUser(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.userLoginPOST = function userLoginPOST (req, res, next) {
  let username = req.swagger.params['username'].value;
  let password = req.swagger.params['password'].value;
  User.userLoginPOST(username,password)
    .then(function (response) {
      if(response[0] === undefined) {}
      else {
        //save the user id in the cookie if has logged in successfully
        req.session[cookie.uid] = response[0].id; 
      }
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userRegisterPOST = function userRegisterPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.userRegisterPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
