const express = require('express');
const router = express.Router();

const BlogsController = require('../controllers/blog');

router.get('' , BlogsController.getAll);

router.get('/:slug' , BlogsController.getBySlug);

router.post('/new' , BlogsController.createBlog);

router.delete('/:slug' , BlogsController.deleteBySlug) ;

router.patch('/:slug' , BlogsController.updateBySlug) ;

module.exports = router;