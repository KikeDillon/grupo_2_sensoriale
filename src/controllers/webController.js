const path = require('path');
const db = require ('../database/models');
const { Op } = require("sequelize");

const cssindex = ['footer', 'header', 'tablet', 'index'];

const webController = {
    index: function (req,res){
        db.Product.findAll(
            {where:{ destacado : { [Op.like]: '%1%'}},include:['mark', 'model', 'measure','genre']},
            )
            .then((perfumes)=>{
        return res.render (path.resolve(__dirname, '../views/web/index.ejs'), {styles: cssindex, perfumes:perfumes});
        })
    }
}

module.exports = webController;