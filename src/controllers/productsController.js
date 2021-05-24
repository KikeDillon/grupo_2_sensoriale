const path = require('path');

const db = require ('../database/models');

const cssdetail = ['footer', 'header', 'tablet', 'detail'];
const cssselection = ['footer', 'header', 'tablet', 'selection'];

const {Products} = require('../database/models');



const productsController = {
    detail: function (req,res){
        Products.findByPk(req.params.id, {
            include: [{association: 'mark'}, {association: 'model'}, {association: 'measure'}]
        })  
        .then(products => {
            return res.send(products)
            return res.render (path.resolve(__dirname, '../views/products/detail.ejs'), {styles: cssdetail, products });
        })
        .catch(error => res.send(error))
        //return res.render (path.resolve(__dirname, '../views/products/detail.ejs'), {styles: cssdetail });
    }, 
    selection: function (req,res){
        
        if (req.params.genre){

                console.log (res.locals.productGenre)

            // HaceR consultas para traer productores por género.

            // traer todas las marcas relacionadas al género

            // traer todos los modelos relacionados a la marca

        }
        return res.render (path.resolve(__dirname, '../views/products/selection.ejs'), {styles: cssselection });
    }
}

module.exports = productsController;