const path = require('path');

const csscheckout = ['footer', 'headersale', 'checkout'];
const cssmaridaje = ['footer', 'headersale', 'maridaje'];
const cssmessagecard = ['footer', 'headersale', 'tablet', 'notebook', 'message-card'];
const csspackaging = ['footer', 'headersale', 'packaging'];
const csspayment = ['footer', 'headersale', 'tablet', 'notebook', 'payment'];
const cssshipping = ['footer', 'headersale', 'tablet', 'notebook', 'shipping'];

const saleController = {
    checkout: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/checkout.ejs'), {styles: csscheckout});
    },    
    maridaje: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/maridaje.ejs'), {styles: cssmaridaje});
    },    
    messagecard: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/message-card.ejs'), {styles: cssmessagecard});
    },
    packaging: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/packaging.ejs'), {styles: csspackaging});
    },    
    payment: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/payment.ejs'), {styles: csspayment});
    },    
    shipping: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/shipping.ejs'), {styles: cssshipping});
    }
}

module.exports = saleController;