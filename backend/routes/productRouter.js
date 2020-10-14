const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const errorHandler = require('../utils/errorHandler');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', (req, res) => {
    Product.find({})
    .then(products => res.json(products))
    .catch(err => errorHandler(res, err, 500, 'Unable to fetch products.'));
});

// @desc    Fetch a single product
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
    .then(product => {
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found.' });
        }
    })
    .catch(err => errorHandler(res, err, 500, 'Unable to fetch product.'));
});

module.exports = router;