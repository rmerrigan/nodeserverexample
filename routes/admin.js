const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
//not executing getAddProduct, just passing a reference to it (no parens)
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
//not executing postAddProduct, just passing a reference to it (no parens)
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
