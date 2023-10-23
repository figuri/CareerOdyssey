const express = require('express');
const router = express.Router();
const newsController = require('../../controllers/news-cntrl');

// define routes for news

// get all news
router.get('/', newsController.getAllNews);

// get news by id
router.get('/:id', newsController.getNewsById);

// create news
router.post('/', newsController.createNews);

// update news
router.put('/:id', newsController.updateNews);

// delete news
router.delete('/:id', newsController.deleteNews);

module.exports = router;