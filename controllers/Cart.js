'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');
let cookie = require('../utils/cookie.js');

module.exports.cartGET = function cartGET (req, res, next) {
  let cartId = req.session[cookie.uid];
  if(cartId === undefined) {
    cartId = 0 //with 0 get cart will return an empty json
  }
  Cart.cartGET(cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
