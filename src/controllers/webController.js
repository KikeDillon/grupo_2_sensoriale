const path = require('path');

const webController = {
    index: function (req,res){
        return res.render (path.resolve(__dirname, '../views/web/index.ejs'));
    }
}

module.exports = webController;
