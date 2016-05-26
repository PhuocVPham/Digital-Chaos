/**
 * Created by PhuocPham on 5/19/2016.
 */

//Require modules and create and instance
var http = require('http');
var express = require('express');
var app = express();
app.listen(3000);

//Crete Views
app.set('view engine', 'jade'); //use view engine called jade
app.set('views', './views'); // using view folder from fs


//create routes
app.get('/', function(req, res) {
    res.render('index', {title: 'welcome', message: 'hello expressJS!' });
});

