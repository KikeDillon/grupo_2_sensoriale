const path = require('path');

/*const headcss = ['footer', 'header', 'tablet', 'notebook', 'checkout']; */

const productsController = {
    detail: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/detail.ejs')/*, {titulo: 'detalle del producto', headcss: }*/);
    },    
    selection: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/selection.ejs'));
    }
}

module.exports = productsController;