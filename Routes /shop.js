const express = require('express');//import express same 
const path = require('path');
// const routdir = require('../util/path');
// const adminData = require('./admin');

const router = express.Router();// import Router 

const productController = require("../Controllers/products");

router.get('/', productController.getProducts);

module.exports = router;


