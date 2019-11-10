const http = require('http'); //http documents 
const express = require('express'); // express importing 
const bodyParser = require('body-parser');
const path = require('path');// global path to configure 
// const expressHbs = require('express-handlebars');

// express function 
const app = express();
// app.engine('hbs',expressHbs());// handlebars are not in express package so need to tell the express server
// app.set('view engine', 'pug');//telling the express that we are using templating engine
// app.set('view engine','hbs');// should match the name given inside app.engine line number 9 
app.set('view engine', 'ejs');
app.set('views', 'Views');

//exporting controlles 
const errorControllers = require('./Controllers/error404');

//import Routes file which contain admin routes
const adminRoutes = require('./Routes /admin');
const shopRoutes = require('./Routes /shop');
const rootDir = require('./util/path');

//body-parser package remember put it before all the middlewares even default middleware
app.use(bodyParser.urlencoded({ extended: false }));

// public permission to access the styling 
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req,res,next) => { 
//     console.log("in the middleware");
//     next(); //Alows the request to continue to the next middleware in line 

// });
//remember to put before the / middleware

// app.use('/add-product', (req, res, next) => {
//     // console.log("in the another middleware");
//     // res.send('<h1>add product page</h1>');
//     res.send('<form action="/product" method="POST"><input type="text" name="ProductName"><button type="submit">add product</button></form>')
// });

// //doesnt matter the funnel which doesnt have relation so you can keep at any postion after or before any middleware but remember
// // its should come before the default middleware which is '/'

// app.use('/product', (req,res,next) => {
//     console.log("inside action middleware where output from form can be handled");
//     // res.send()
//     console.log(req.body);
//     res.redirect('/');
// });
app.use('/admin', adminRoutes);// order matters as usual before default middleware,filtering the path by adding the admin segment  

// app.use('/', (req, res, next) => {
//     // console.log("in the another middleware");
//     res.send('<h1>God give me strength and time to complete what i have started</h1>');
// });

// exported to routes/shop.js and orders matters 
app.use(shopRoutes);

// now handle the request like 404 not found 
app.use(errorControllers.get404);
// creating server 
// const server = http.createServer(app);
// server.listen(3000);
// alternative way using express  for above creating server 
app.listen(3000);




