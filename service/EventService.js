'use strict';


/**
 * Events in schedule
 * List of events in schedule
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.eventsGET = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "name" : "Manzoni Presentation",
  "presentedBook" : [ {
    "id" : 0,
    "title" : "I promessi sposi",
    "author" : "Alessandro Manzoni",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
  } ],
  "date" : "1/6/2019",
  "subscribers" : "1"
}, {
  "id" : 1,
  "name" : "Manzoni Presentation",
  "presentedBook" : [ {
    "id" : 0,
    "title" : "I promessi sposi",
    "author" : "Alessandro Manzoni",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
  } ],
  "date" : "1/6/2019",
  "subscribers" : "1"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find event by ID
 * Returns a specific event
 *
 * eventId Long ID of event to register in
 * returns Event
 **/
exports.findEventById = function(eventId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "name" : "Manzoni Presentation",
  "presentedBook" : [ {
    "id" : 0,
    "title" : "I promessi sposi",
    "author" : "Alessandro Manzoni",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
  } ],
  "date" : "1/6/2019",
  "subscribers" : "1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

