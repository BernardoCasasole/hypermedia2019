'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');


module.exports.eventsGET = function eventsGET (req, res, next) {
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  Event.eventsGET(offset,limit)
    .then(function (response) {
      if(response[0] === undefined)
       utils.writeJson(res, response, 404)
      else
        utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};


module.exports.findEventById = function findEventById (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  Event.findEventById(eventId)
    .then(function (response) {
      if(response[0] === undefined)
       utils.writeJson(res, response, 404)
      else
        utils.writeJson(res, response, 200)
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};


module.exports.eventsMonth = function eventsMonth (req, res, next) {
  Event.eventsMonth()
    .then(function (response) {
      if(response[0] === undefined)
       utils.writeJson(res, response, 400)
      else
        utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};


module.exports.findEventByMonth = function findEventByMonth (req, res, next) {
  let month = req.swagger.params['month'].value;
  let year = req.swagger.params['year'].value;
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;
  Event.findEventByMonth(month, year, limit, offset)
    .then(function (response) {
      if(response[0] === undefined)
       utils.writeJson(res, response, 404)
      else
        utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};


module.exports.findEventsByName = function findEventsByName (req, res, next) {
  var eventName = req.swagger.params['eventName'].value;
  let offset = req.swagger.params['offset'].value || 0;
  let limit = req.swagger.params['limit'].value || 20;

  Event.findEventsByName(eventName, offset, limit)
    .then(function (response) {
      if(response[0] === undefined)
        utils.writeJson(res, response, 404)
      else
        utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};


module.exports.findEventsByBook = function findEventsByBook (req, res, next) {
  let bookId = req.swagger.params['bookId'].value || 0;

  Event.findEventsByBook(bookId)
    .then(function (response) {
      if(response[0] === undefined)
        utils.writeJson(res, response, 404)
      else
        utils.writeJson(res, response, 200)
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
}
