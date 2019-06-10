'use strict';

let db;

exports.booksDbSetup = function(database) {
  db = database;
  return database.schema.hasTable("books").then(exists => {
    console.log("Checking if books table exists...");
    if (!exists) {
      console.log("It doesn't!");
    } else {
      console.log('Ok.');
    }
  });
}

/**
 * Books available in the inventory
 * List of books available in the inventory
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.booksGET = function(offset,limit) {
  return db.raw("SELECT b.*, a1.name as name, a2.name as name2, a3.name as name3, a4.name as name4 " +
    "FROM books as b "+
    "LEFT JOIN authors as a1 ON b.author = a1.id " +
    "LEFT JOIN authors as a2 ON b.author2 = a2.id " +
    "LEFT JOIN authors as a3 ON b.author3 = a3.id " +
    "LEFT JOIN authors as a4 ON b.author4 = a4.id " +
    "LIMIT " + limit + " OFFSET " + offset +";")

}


/**
 * Finds book by ID
 * Returns a book
 *
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getBookById = function(bookId) {
  return db.raw("SELECT b.*, a1.name as name, a2.name as name2, a3.name as name3, a4.name as name4 " +
    "FROM books as b "+
    "LEFT JOIN authors as a1 ON b.author = a1.id " +
    "LEFT JOIN authors as a2 ON b.author2 = a2.id " +
    "LEFT JOIN authors as a3 ON b.author3 = a3.id " +
    "LEFT JOIN authors as a4 ON b.author4 = a4.id " +
    "WHERE b.id = " + bookId)
}

/**
 * Find books by number of sold copies
 * Returns a list of books ordered by sold copies
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns Book
 **/
exports.getBookBySoldCopies = function(offset,limit) {
  return db.raw("SELECT b.*, a1.name as name, a2.name as name2, a3.name as name3, a4.name as name4 " +
    "FROM books as b "+
    "LEFT JOIN authors as a1 ON b.author = a1.id " +
    "LEFT JOIN authors as a2 ON b.author2 = a2.id " +
    "LEFT JOIN authors as a3 ON b.author3 = a3.id " +
    "LEFT JOIN authors as a4 ON b.author4 = a4.id " +
    "ORDER BY soldQty desc " +
    "LIMIT " + limit + " OFFSET " + offset +";")
}


/**
 * Find book(s) by author
 * Returns a book (or more) with specified author
 *
 * author String author of book(s) to return
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns Book
 **/
exports.getBooksByAuthor = function(author,offset,limit) {
  return db.raw("SELECT b.*, a1.name as name, a2.name as name2, a3.name as name3, a4.name as name4 " +
  "FROM books as b "+
  "LEFT JOIN authors as a1 ON b.author = a1.id " +
  "LEFT JOIN authors as a2 ON b.author2 = a2.id " +
  "LEFT JOIN authors as a3 ON b.author3 = a3.id " +
  "LEFT JOIN authors as a4 ON b.author4 = a4.id " +
  "WHERE b.author = "+author+" OR b.author2="+author+" OR b.author3="+author+" OR b.author4="+author+" "+
  "LIMIT " + limit + " OFFSET " + offset +";")
}


/**
 * Find book(s) by genre
 * Returns a book (or more) with specified genre
 *
 * genre String genre of book(s) to return
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns Book
 **/
exports.getBooksByGenre = function(genre,offset,limit) {
  return db.raw("SELECT b.*, a1.name as name, a2.name as name2, a3.name as name3, a4.name as name4 " +
  "FROM books as b "+
  "LEFT JOIN authors as a1 ON b.author = a1.id " +
  "LEFT JOIN authors as a2 ON b.author2 = a2.id " +
  "LEFT JOIN authors as a3 ON b.author3 = a3.id " +
  "LEFT JOIN authors as a4 ON b.author4 = a4.id " +
  "WHERE b.genres = '"+genre+"' "+
  "LIMIT " + limit + " OFFSET " + offset +";")
}


/**
 * Find book(s) by publication date
 * Returns a book (or more) with specified date
 *
 * date String publication date of book(s) to return
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns Book
 **/
exports.getBooksByPublicationDate = function(date,offset,limit) {
  return db.raw("SELECT b.*, a1.name as name, a2.name as name2, a3.name as name3, a4.name as name4 " +
  "FROM books as b "+
  "LEFT JOIN authors as a1 ON b.author = a1.id " +
  "LEFT JOIN authors as a2 ON b.author2 = a2.id " +
  "LEFT JOIN authors as a3 ON b.author3 = a3.id " +
  "LEFT JOIN authors as a4 ON b.author4 = a4.id " +
  "WHERE b.publicationDate = "+date+" "+
  "LIMIT " + limit + " OFFSET " + offset +";")
}


/**
 * Find book(s) by theme
 * Returns a list of books with specified theme
 *
 * theme String theme of books to return
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns Book
 **/
exports.getBooksByTheme = function(theme,offset,limit) {
  return db.raw("SELECT b.*, a1.name as name, a2.name as name2, a3.name as name3, a4.name as name4 " +
  "FROM books as b "+
  "LEFT JOIN authors as a1 ON b.author = a1.id " +
  "LEFT JOIN authors as a2 ON b.author2 = a2.id " +
  "LEFT JOIN authors as a3 ON b.author3 = a3.id " +
  "LEFT JOIN authors as a4 ON b.author4 = a4.id " +
  "WHERE b.theme1 = '"+theme+"' OR b.theme2='"+theme+"' OR b.theme3='"+theme+"' "+
  "LIMIT " + limit + " OFFSET " + offset +";")
}


/**
 * Find book(s) by Title
 * Returns a book (or more) with specified title
 *
 * title String title of book(s) to return
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns Book
 **/
exports.getBooksByTitle = function(title,offset,limit) {
  title = title.toLowerCase()
  title = "'%"+title+"%'"
  return db.raw("SELECT b.*, a1.name as name, a2.name as name2, a3.name as name3, a4.name as name4 " +
  "FROM books as b "+
  "LEFT JOIN authors as a1 ON b.author = a1.id " +
  "LEFT JOIN authors as a2 ON b.author2 = a2.id " +
  "LEFT JOIN authors as a3 ON b.author3 = a3.id " +
  "LEFT JOIN authors as a4 ON b.author4 = a4.id " +
  "WHERE lower(title) like "+title+" "+
  "LIMIT " + limit + " OFFSET " + offset +";")
}


/**
 * Find sponsored books
 * Returns a list of sponsored books
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns Book
 **/
exports.getSponsoredBooks = function(offset,limit) {
  return db.raw("SELECT b.*, a1.name as name, a2.name as name2, a3.name as name3, a4.name as name4 " +
  "FROM books as b "+
  "LEFT JOIN authors as a1 ON b.author = a1.id " +
  "LEFT JOIN authors as a2 ON b.author2 = a2.id " +
  "LEFT JOIN authors as a3 ON b.author3 = a3.id " +
  "LEFT JOIN authors as a4 ON b.author4 = a4.id " +
  "WHERE b.issponsored " +
  "LIMIT " + limit + " OFFSET " + offset +";")
}

//get books ordered by sold copies in the specified month (and year)
exports.getBooksBySoldCopiesInMonth = function(month, year, offset, limit) {
  return db.raw("SELECT b.*, s.*, a1.name as name, a2.name as name2, a3.name as name3, a4.name as name4 " +
  "FROM sales as s "+
  "LEFT JOIN books as b ON s.bookid = b.id " +
  "LEFT JOIN authors as a1 ON b.author = a1.id " +
  "LEFT JOIN authors as a2 ON b.author2 = a2.id " +
  "LEFT JOIN authors as a3 ON b.author3 = a3.id " +
  "LEFT JOIN authors as a4 ON b.author4 = a4.id " +
  "WHERE s.month = "+month+" AND s.year="+year+" "+
  "ORDER BY totalsold DESC " +
  "LIMIT " + limit + " OFFSET " + offset +";")
}