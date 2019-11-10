const express = require('express');
const path = require('path');
const routdir = require('../util/path');
const productController = require('../Controllers/products');
const router = express.Router();

//replace app.use to router.use-important 
//get the  form and post to value to the next middleware 
router.get('/add-product', productController.getAddProduct);
//post the value 
router.post('/product', productController.postAddProduct);
// module.exports = router;
// exports.routes = router;
// exports.products = products;
module.exports = router;
