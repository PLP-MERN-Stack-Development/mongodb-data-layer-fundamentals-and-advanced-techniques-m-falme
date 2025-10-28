// Run with: mongosh --file queries.js
// This file contains the CRUD, advanced queries, aggregation pipelines, and indexing examples.

// 1) Find all books in a specific genre
print('Find all Fiction books:');
printjson(db.books.find({ genre: 'Fiction' }).toArray());

// 2) Find books published after a certain year
print('\nFind books published after 1950:');
printjson(db.books.find({ published_year: { $gt: 1950 } }).toArray());

// 3) Find books by a specific author
print('\nFind books by George Orwell:');
printjson(db.books.find({ author: 'George Orwell' }).toArray());

// 4) Update the price of a specific book
print('\nUpdate price of "1984" to 15.99:');
db.books.updateOne({ title: '1984' }, { $set: { price: 15.99 } });
printjson(db.books.findOne({ title: '1984' }));

// 5) Delete a book by its title
print('\nDelete "Moby Dick" if present:');
db.books.deleteOne({ title: 'Moby Dick' });
print('Deleted. Current count:', db.books.countDocuments());



// 6) Books that are in stock and published after 2010
print('In-stock books published after 2010:');
printjson(db.books.find({ in_stock: true, published_year: { $gt: 2010 } }).toArray());

// 7) Projection: title, author, price only
print('\nProjection (title, author, price):');
printjson(db.books.find({}, { projection: { _id: 0, title: 1, author: 1, price: 1 } }).toArray());

// 8) Sorting by price ascending and descending
print('\nSorted by price (asc):');
printjson(db.books.find({}, { projection: { _id: 0, title: 1, price: 1 } }).sort({ price: 1 }).toArray());

print('\nSorted by price (desc):');
printjson(db.books.find({}, { projection: { _id: 0, title: 1, price: 1 } }).sort({ price: -1 }).toArray());

// 9) Pagination: limit & skip (5 per page)
print('\nPagination - page 1 (first 5):');
printjson(db.books.find({}, { projection: { _id: 0, title: 1 } }).skip(0).limit(5).toArray());

print('\nPagination - page 2 (next 5):');
printjson(db.books.find({}, { projection: { _id: 0, title: 1 } }).skip(5).limit(5).toArray());


// 10) Average price of books by genre
print('Average price by genre:');
printjson(db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" }, count: { $sum: 1 } } },
  { $sort: { avgPrice: -1 } }
]).toArray());

// 11) Author with the most books
print('\nAuthor with the most books:');
printjson(db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]).toArray());

// 12) Group books by publication decade and count them

printjson(db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } },
          "s"
        ]
      },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]).toArray());


// 13) Explain before creating index (search by title)
print('Explain (before index) for title="1984":');
printjson(db.books.find({ title: '1984' }).explain('executionStats'));

// 14) Create an index on title and a compound index on author + published_year
print('\nCreate index on title:');
printjson(db.books.createIndex({ title: 1 }));

print('\nCreate compound index on author and published_year:');
printjson(db.books.createIndex({ author: 1, published_year: -1 }));

// 15) Explain after creating index
print('\nExplain (after index) for title="1984":');
printjson(db.books.find({ title: '1984' }).explain('executionStats'));
