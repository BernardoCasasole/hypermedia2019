'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');
let cookie = require('../utils/cookie.js');

module.exports.cartGET = function cartGET (req, res, next) {
  let userId = req.session[cookie.uid];
  if(userId === undefined) {
    userId = 0 //with 0 get cart will return an empty json
  }
  Cart.cartGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.cartAddBook = function cartAddBook (req, res, next) {
  var body = req.swagger.params['body'].value;
  console.log("logging body for add cart")
  console.log(body)

  let userId = req.session[cookie.uid];
  if(userId === undefined) {
    userId = 0 //with 0 get cart will return an empty json
  }
  let response = Cart.cartAddBook(userId, body.bookId, body.qty)
  utils.writeJson(res, response);
};
