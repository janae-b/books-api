var express = require('express');
var router = express.Router();
const booksCtrl = require('../controllers/api/books')

router.get("/books", booksCtrl.index)
router.get("/books/:id", booksCtrl.show)
router.post("/books", booksCtrl.create)
router.put("/books/:id", booksCtrl.update)
router.delete("/books/:id", booksCtrl.delete)

module.exports = router;
