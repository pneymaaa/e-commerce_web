const express = require('express');
const ProductController = require('../controllers/products');
const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProduct);

module.exports = router;