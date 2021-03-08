const path = require('path');

const csscheckout = ['footer', 'headersale', 'checkout'];
const cssmaridaje = ['footer', 'headersale', 'maridaje'];
const cssmessagecard = ['footer', 'headersale', 'tablet', 'message-card'];
const csspackaging = ['footer', 'headersale', 'packaging'];
const csspayment = ['footer', 'headersale', 'tablet', 'payment'];
const cssshipping = ['footer', 'headersale', 'tablet', 'shipping'];

const saleController = {
    checkout: function (req,res){
        return res.render (path.resolve(__dirname, '../views/sale/checkout.ejs'), {styles: csscheckout});
    },    
    maridaje: function (req,res){
        return res.render (path.resolve(__dirname, '../views/sale/maridaje.ejs'), {styles: cssmaridaje});
    },    
    messagecard: function (req,res){
        return res.render (path.resolve(__dirname, '../views/sale/message-card.ejs'), {styles: cssmessagecard});
    },
    packaging: function (req,res){
        return res.render (path.resolve(__dirname, '../views/sale/packaging.ejs'), {styles: csspackaging});
    },    
    payment: function (req,res){
        return res.render (path.resolve(__dirname, '../views/sale/payment.ejs'), {styles: csspayment});
    },    
    shipping: function (req,res){
        return res.render (path.resolve(__dirname, '../views/sale/shipping.ejs'), {styles: cssshipping});
    }
}

module.exports = saleController;