const express = require ('express');
const app = express ();

const path = require ('path');
const publicpath = path.resolve (__dirname, './public');

app.use (express.static(publicpath));

app.set ('puerto', process.env.PORT || 3000);

app.listen (app.get ('puerto'), function(){
    console.log ("LEVANTÓ EL SERVIDOR");
});

app.get('/', function(req, res){
    res.sendFile (path.resolve(__dirname, './views/index.html'));
});

app.get('/register', function(req, res){
    res.sendFile (path.resolve(__dirname, './views/register.html'));
});

app.get('/login', function(req, res){
    res.sendFile (path.resolve(__dirname, './views/login.html'));
});

app.get('/checkout', function(req,res){
    res.sendFile (path.resolve(__dirname, './views/checkout.html'));
});

app.get ('/detail', function (req,res){
    res.sendFile (path.resolve(__dirname, './views/detail.html'));
});

app.get ('/selection', function (req,res){
    res.sendFile (path.resolve(__dirname, './views/selection.html'));
});

app.get ('/payment', function (req,res){
    res.sendFile (path.resolve(__dirname, './views/payment.html'));
});

app.get ('/shipping', function (req,res){
    res.sendFile (path.resolve(__dirname, './views/shipping.html'));
});

app.get ('/maridaje', function (req,res){
    res.sendFile (path.resolve(__dirname, './views/maridaje.html'));
});
