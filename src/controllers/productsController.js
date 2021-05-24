const path = require('path');

const db = require ('../database/models');

const cssdetail = ['footer', 'header', 'tablet', 'detail'];
const cssselection = ['footer', 'header', 'tablet', 'selection'];

const productsController = {
    detail: function (req,res){
        db.Product.findByPk(req.params.id, {
            include: [{association: 'mark'}, {association: 'model'}, {association: 'measure'}]
        })
        .then (perfume => {
            return res.json (perfume);
            return res.render (path.resolve(__dirname, '../views/products/detail.ejs'), {styles: cssdetail, perfume: perfume});
        })
        .catch(error => res.send(error))
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