const path = require('path');

const detailcss = ['footer', 'header', 'tablet', 'notebook', 'checkout'];
const selectioncss = ['footer', 'header', 'tablet', 'notebook', 'checkout'];


const productsController = {
    detail: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/detail.ejs'), {styles: detailcss });
    },    
    selection: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/selection.ejs')), {styles: css });
    }
}

module.exports = productsController;