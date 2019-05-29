'use strict';

let db;

exports.booksDbSetup = function(database) {
  db = database;
  console.log("Checking if books table exists...");
  return database.schema.hasTable("books").then(exists => {
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
  if( limit === undefined || limit<=0 || limit === NaN) {
    limit = 20
  }
  return db('books')
    .limit(limit)
    .offset(offset)
    .leftJoin('authors', 'books.id', '=', 'authors.id')
}


/**
 * Finds book by ID
 * Returns a book
 *
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getBookById = function(bookId) {
  return db.select()
  .from('books')
  .where('id', bookId);
  .leftJoin('authors', 'books.id', '=', 'authors.id')
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
  return db.select()
    .from('books')
    .orderBy('soldQty', 'desc')
    .limit(limit)
    .offset(offset)
    .leftJoin('authors', 'books.id', '=', 'authors.id')
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
  return db.select()
    .from('books')
    .where('author',author)
    .limit(limit)
    .offset(offset)
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
  limit = 5;
  offset = 0;
  return db.select()
    .from('books')
    .where('genres',genre)
    .limit(limit)
    .offset(offset)
    .leftJoin('authors', 'books.id', '=', 'authors.id')
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
  return db.select()
    .from('books')
    .where('publicationDate', date)
    .limit(limit)
    .offset(offset)
    .leftJoin('authors', 'books.id', '=', 'authors.id')
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
  limit = 5;
  offset = 0;
  return db.select()
    .from('books')
    .where('theme1',theme)
    .orWhere('theme2', theme)
    .orWhere('theme3', theme)
    .limit(limit)
    .offset(offset)
    .leftJoin('authors', 'books.id', '=', 'authors.id')
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
  title = '%'+title+'%'
  return db.select()
    .from('books')
    .where('title','like', title)
    .limit(limit)
    .offset(offset)
    .leftJoin('authors', 'books.id', '=', 'authors.id')
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
  return db.select()
    .from('books')
    .where('isSponsored',true)
    .limit(limit)
    .offset(offset)
    .leftJoin('authors', 'books.id', '=', 'authors.id')
}

//get books ordered by sold copies in the specified month (and year)
exports.getBooksBySoldCopiesInMonth = function(month, year, offset, limit) {
  return db.select()
  .from('sales')
  .where('month', month)
  .andWhere('year', year)
  .orderBy('totalSold', 'desc')
  .limit(limit)
  .offset(offset)
  .leftJoin('books', 'sales.bookId', '=', 'books.id')
  .leftJoin('authors', 'books.id', '=', 'authors.id')
}