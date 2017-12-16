/**
 * Module dependencies.
 */
const express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path'),
    api = require('./routes/api-routes');
//var methodOverride = require('method-override');
const session = require('express-session'); //needed for Passport authentication
// var passport = require("./config/passport"); //needed for Passport authentication
const app = express();
const db = require("./models");
const Sequelize = require('sequelize');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',

    database: 'tropical_inventory'

});

connection.connect();

global.db = connection;
var PORT = process.env.PORT || 8080;


// all environments
// app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 120000000 }
}))

// development only

app.get('/', routes.index); //call for main index page
app.get('/signup', user.signup); //call for signup page
app.post('/signup', user.signup); //call for signup post 
app.get('/login', routes.index); //call for login page
app.post('/login', user.login); //call for login post
app.get('/home/dashboard', user.dashboard); //call for dashboard page after login
app.get('/home/logout', user.logout); //call for logout
// app.get('/home/profile',user.profile);//to render users profile
app.get('/home/stockcontrol', user.stockcontrol);
app.get('/home/inventory', user.inventory);
app.get('/home/orders', user.orders);
// app.get('/home/api/inventory', api.api_inventory);
 

//THIS NOW UPDATES THE COLUMN TOTAL when you click 
app.put('/api/receiveorders', receiveOrders)

function receiveOrders(res, req) {

    const ordersid = res.body.ordersid
    const ordersquantity = parseInt(res.body.ordersquantity)
    const ordersmonth = res.body.ordersmonth
    const ordersday = res.body.ordersday
    const ordersyear = res.body.ordersyear

    db.Inventory
        .findOne({
            where: {
                product_code: ordersid
            },
        })
        .then(function(data) {
            // console.log(data)
            const product = data.dataValues
            // console.log(typeof product[locationFrom],typeof product[locationTo], typeof amount)

            db.Inventory
                .update({

                        total: total + ordersquantity
                    }, // [locationFrom]: product[locationFrom] - amount,  

                    { where: { product_code: ordersid } }
                )
                .then(function(update) {
                    console.log('update', update)
                })
                .catch(function(err) {
                    console.log('error', err)
                })
        })
}

app.put('/api/sendorders', sendOrders)

function sendOrders(res, req) {

    const ordersid = res.body.ordersid
    const ordersquantity = parseInt(res.body.ordersquantity)
    const ordersmonth = res.body.ordersmonth
    const ordersday = res.body.ordersday
    const ordersyear = res.body.ordersyear

    db.Inventory
        .findOne({
            where: {
                product_code: ordersid
            },
        })
        .then(function(data) {
            // console.log(data)
            const product = data.dataValues
            // console.log(typeof product[locationFrom],typeof product[locationTo], typeof amount)

            db.Inventory
                .update({

                        total: total - ordersquantity
                    }, // [locationFrom]: product[locationFrom] - amount,  

                    { where: { product_code: ordersid } }
                )
                .then(function(update) {
                    console.log('update', update)
                })
                .catch(function(err) {
                    console.log('error', err)
                })
        })
}

// this is the end of inventoryorders



//start of stock control 
app.put('/api/stockcontrol', stockControl)

function stockControl(res, req) {
    console.log('res SC', res.body)
    const name = res.body.name
    const locationFrom = res.body.locationFrom
    const locationTo = res.body.locationTo
    const amount = parseInt(res.body.amount)

    db.Inventory
        .findOne({
            where: {
                product_code: name
            },
        })
        .then(function(data) {
            // console.log(data)
            const product = data.dataValues
            console.log(typeof product[locationFrom], typeof product[locationTo], typeof amount)

            db.Inventory
                .update({
                    [locationFrom]: product[locationFrom] - amount,
                    [locationTo]: product[locationTo] + amount
                }, { where: { product_code: name } })
                .then(function(update) {
                    console.log('update', update)
                })
                .catch(function(err) {
                    console.log('error', err)
                })
        })
}

app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));
require("./routes/api-routes.js")(app);

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
//Middleware
// app.listen(8080)