const path = require('path');

const saleController = {
    checkout: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/checkout.ejs'));
    },    
    maridaje: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/maridaje.ejs'));
    },    
    messagecard: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/message-card.ejs'));
    },
    packaging: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/packaging.ejs'));
    },    
    payment: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/payment.ejs'));
    },    
    shipping: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/shipping.ejs'));
    }
}

module.exports = saleController;