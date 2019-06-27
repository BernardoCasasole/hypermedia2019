'use strict';

let db;

exports.eventsDbSetup = function(database) {
  db = database;
  return database.schema.hasTable("events").then(exists => {
    console.log("Checking if events table exists...");
    if (!exists) {
      console.log("It doesn't!");
    } else {
      console.log('Ok.');
    }
  });
}

/**
 * Events in schedule
 * List of events in schedule
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.eventsGET = function(offset,limit) {
  if( limit === undefined || limit<=0 || limit === NaN) {
    limit = 20
  }
  return db
    .from('events')
    .limit(limit)
    .offset(offset)
    .leftJoin('books', 'events.presentedBook', '=', 'books.id')
    .select()
}


/**
 * Find event by ID
 * Returns a specific event
 *
 * eventId Long ID of event to register in
 * returns Event
 **/
exports.findEventById = function(eventId) {
  return db.select()
  .from('events')
  .where('eid', eventId)
  .leftJoin('books', 'events.presentedBook', '=', 'books.id')
}


/**
 * Find events by date
 * Returns a list of events by date
 *
 * date String category of event to register in
 * returns Event
 **/
exports.findEventByMonth = function(month, year, limit, offset) {
  return db.select()
  .from('events')
  .whereRaw(`EXTRACT(MONTH FROM date::date) = ?`, [month])
  .andWhereRaw(`EXTRACT(YEAR FROM date::date) = ?`, [year])
  .leftJoin('books', 'events.presentedBook', '=', 'books.id')
  .limit(limit)
  .offset(offset);
}
/*
.where('date', '>=', date1)
  .andWhere('date', '<=', date2)
*/

/**
 * Find event by name
 * Returns a specific event by name
 *
 * eventName String name of event to register in
 * returns Event
 **/
exports.findEventsByName = function(eventName, offset, limit) {
  eventName = eventName.toLowerCase()
  eventName = "'%"+eventName+"%'"
  return db.select()
  .from('events')
  .whereRaw("lower(eventname) like " + eventName)
  .limit(limit)
  .offset(offset);
}
exports.eventsMonth = function() {
  return db.distinct('date')
  .from('events')
}

