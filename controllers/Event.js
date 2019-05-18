'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventsGET = function eventsGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Event.eventsGET(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findEventById = function findEventById (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  Event.findEventById(eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findEventByCategory = function findEventByCategory (req, res, next) {
  var category = req.swagger.params['category'].value;
  Event.findEventByCategory(category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findEventByDate = function findEventByDate (req, res, next) {
  var date = req.swagger.params['date'].value;
  Event.findEventByDate(date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findEventByName = function findEventByName (req, res, next) {
  var eventName = req.swagger.params['eventName'].value;
  Event.findEventByName(eventName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
