const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');
const { authentication, isAdmin, isManager, isUser } = require('../middlewares/authentication');
const { upload } = require('../middlewares/multer');

router.post('/addBooks',authentication, isManager, upload.single('myFile'), BookController.addBook);
router.get('/getBooks',authentication, isUser, BookController.getAll);
router.delete('/deleteBook/id/:id',authentication, isManager, BookController.delete);
router.get("/id/:id",authentication, isUser, BookController.getById);
router.put('/:id',authentication, isAdmin, BookController.update)
router.get("/search/title/:title",authentication, isUser, BookController.getByName);
router.get("/search/price/:price",authentication, isUser, BookController.getByPrice);
router.get('/getBooksOrdered',authentication, isUser, BookController.getAllOrdered);

module.exports = router;