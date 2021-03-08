const path = require('path');

const cssdetail = ['footer', 'header', 'tablet', 'detail'];
const cssselection = ['footer', 'header', 'tablet', 'selection'];


const productsController = {
    detail: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/detail.ejs'), {styles: cssdetail});
    },    
    selection: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/selection.ejs'), {styles: cssselection});
    }
}

module.exports = productsController;