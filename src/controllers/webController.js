const path = require('path');

const cssindex = ['footer', 'header', 'tablet', 'notebook', 'index'];

const webController = {
    index: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/index.ejs'), {styles: cssindex});
    }
}

module.exports = webController;
