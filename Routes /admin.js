const express = require('express');
const path = require('path');
const routdir = require('../util/path');
const router = express.Router();
const products = [];

//replace app.use to router.use-important 
//get the  form and post to value to the next middleware 
router.get('/add-product', (req, res, next) => {
    // console.log("in the another middleware");
    // res.send('<h1>add product page</h1>');
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="ProductName"><button type="submit">add product</button></form>')
    // res.sendFile(path.join(routdir, 'Views', 'add-product.html'));
    res.render('add-product', { pageTitle: 'Add-Product', path: '/admin/add-product' });
});
//post the value 
router.post('/product', (req, res, next) => {
    // console.log("inside action middleware where output from form can be handled");
    console.log(req.body);
    products.push({ productName: req.body.productName });
    res.redirect('/');
});
// module.exports = router;
exports.routes = router;
exports.products = products;