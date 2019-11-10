const products = [];


exports.getAddProduct = (req, res, next) => {
    // console.log("in the another middleware");
    // res.send('<h1>add product page</h1>');
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="ProductName"><button type="submit">add product</button></form>')
    // res.sendFile(path.join(routdir, 'Views', 'add-product.html'));
    res.render('add-product', 
    { pageTitle: 'Add-Product', 
    path: '/admin/add-product' });
}

exports.postAddProduct = (req, res, next) => {
    // console.log("inside action middleware where output from form can be handled");
    console.log(req.body);
    products.push({ productName: req.body.productName });
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    // console.log("in the another middleware");
    // res.send('<h1>God give me strength and time to complete what i have started</h1>');
    // res.sendFile(path.join(__dirname, '../', 'Views', 'shop.html'));
    // console.log('shop.js',adminData.products);
    // res.sendFile(path.join(routdir, 'Views', 'shop.html'));// alternative way for much cleaner code
    // in use with pug template
    // products = adminData.products;
    res.render('shop', { prods: products, pageTitle: "Shop" ,path:'/'});
}