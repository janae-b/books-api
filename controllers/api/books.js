const Book = require('../../models/book');
module.exports = {
    index,
    show, 
    create,
    delete: deleteBook,
    update
}

function update(req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(book) {
        res.status(200).json(book);
    })
}

function show(req, res)  {
    Book.findById(req.params.id).then(function(book) {
        res.status(200).json(book);
    })
}

function create(req, res) {
    Book.create(req.body).then(function(book) {
        res.status(201).json(book)
    })
}

function index(req, res) {
    Book.find({}).then(function(books) {
        res.status(200).json(books)
    })
}

function deleteBook(req, res) {
    Book.findByIdAndRemove(req.params.id).then(function(book) {
      res.status(200).json(book);
    });
  }

