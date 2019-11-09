const express = require('express');//import express same 
const path = require('path');
const routdir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();// import Router 

router.get('/', (req, res, next) => {
    // console.log("in the another middleware");
    // res.send('<h1>God give me strength and time to complete what i have started</h1>');
    // res.sendFile(path.join(__dirname, '../', 'Views', 'shop.html'));
    // console.log('shop.js',adminData.products);
    // res.sendFile(path.join(routdir, 'Views', 'shop.html'));// alternative way for much cleaner code
    // in use with pug template
    products = adminData.products;
    res.render('shop', { prods: products, pageTitle: "Shop" ,path:'/'});
});
module.exports = router;


