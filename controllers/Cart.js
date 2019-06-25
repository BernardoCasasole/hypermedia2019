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
      if(response[0] === undefined)
        utils.writeJson(res, response, 401);
      else
        utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};


module.exports.cartAddBook = function cartAddBook (req, res, next) {
  let userId = req.session[cookie.uid];
  //if user id is undefined, write error and return
  if(userId === undefined) {
    utils.writeJson(res, {success:false, error:"User not logged"}, 401)
    return
  }

  let body = req.swagger.params['body'].value;
  let bookId = parseInt(body.bookId)
  let qty = parseInt(body.qty)
  let finalRes = {success:false}

  //check if the row with book_id and user_id specified already exists
  Cart.cartCheck(userId, bookId)
  .then(function(response) {
    //if does not exists, insert the tuple
    if(response[0]===undefined) {
      Cart.cartAddBookAdd(userId, bookId, qty).then(function(r) {
        finalRes.success = true;
        utils.writeJson(res, finalRes, 200)
      })
      

    }//if a tuple exists, update it 
    else {
      Cart.cartAddBookUpdate(userId, bookId, qty+response[0].qty).then(function(r) {
        finalRes.success = true;
        utils.writeJson(res, finalRes, 200)
      })
    }
  }).catch(function() {
    utils.writeJson(res, finalRes, 500)
  })
};


module.exports.cartUpdateQty = function cartUpdateQty(req, res, next) {
  let userId = req.session[cookie.uid];
  //if user id is undefined, write error and return
  if(userId === undefined) {
    utils.writeJson(res, {success:false, error:"User not logged"}, 401)
    return
  }

  let body = req.swagger.params['body'].value;
  let bookId = parseInt(body.bookId)
  let qty = parseInt(body.qty)
  let finalRes = {success:false}

  //check if the row with book_id and user_id specified already exists
  Cart.cartCheck(userId, bookId)
  .then(function(response) {
    //if does not exists, insert the tuple, if qty is not 0
    if(response[0]===undefined) {
      //if qty is 0 do nothing, success is true anyway
      if(qty === 0) {
        finalRes.success = true
        utils.writeJson(res, finalRes, 200)
      //if qty is not 0, then add the row
      } else {
        Cart.cartAddBookAdd(userId, bookId, qty).then(function(r) {
          finalRes.success = true;
          utils.writeJson(res, finalRes, 200)
        })
      }

    }//if a tuple exists, update it replacing the old qty
    else {
      //if qty is 0, update the old tuple
      if(qty !== 0) {
        Cart.cartAddBookUpdate(userId, bookId, qty).then(function(r) {
          finalRes.success = true;
          utils.writeJson(res, finalRes, 200)
        })
      } 
      //if qty is 0, delete the tuple
      else {
        Cart.cartDelete(userId, bookId).then(function(r) {
          finalRes.success = true;
          utils.writeJson(res, finalRes, 200)
        })
      }
      
    }
  }).catch(function() {
    utils.writeJson(res, finalRes, 500)
  })
}