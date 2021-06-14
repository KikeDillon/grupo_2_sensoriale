const { readFileSync } = require('fs');
const fs = require ('fs');

const path = require('path');
const {Products, Marks, Genres, Models, Measures} = require('../database/models');
//const sequelize = sequelize;
const { Op } = require("sequelize");
//const { values } = require('sequelize/types/lib/operators');

const db = require ('../database/models/index.js');

const cssAdminIndex = ['footer', 'header', 'tablet', 'admin/adminIndex'];
const cssAdminView = ['footer', 'header', 'tablet', 'admin/adminView'];
const cssAdminDelete = ['footer', 'header', 'tablet', 'admin/adminDelete'];
const cssAdminCreate = ['footer', 'header', 'tablet', 'admin/adminCreate'];
const cssAdminEdit = ['footer', 'header', 'tablet', 'admin/adminEdit'];

const adminController = {

    admin: function(req, res) {
        Products.findAll({
            include:['mark', 'model', 'genre']
        })
         //return res.send(products.mark+'-------------------------------------------------------------')
        .then(products => {
            //return res.send(products)
            return res.render (path.resolve(__dirname, '../views/web/admin/adminIndex.ejs'), {styles: cssAdminIndex, products})
        }).catch (resultado => {
            console.log(resultado)
        })
    },
    create: function (req, res){
        const mark = Marks.findAll();
        const genre = Genres.findAll();
        const measure = Measures.findAll();
        const model = Models.findAll()
        Promise.all([mark, genre, measure, model]) 
        .then(([mark, genre, measure, model]) => {
            //return res.send();
            return res.render (path.resolve(__dirname, '../views/web/admin/adminCreate.ejs'), {styles: cssAdminCreate, mark, genre, measure, model});
          }) .catch (error => res.send(error));
    },
    save: function(req, res) {
        //return res.send(req.body)
        Products.create(
            {
            price: req.body.price,
            outlet: req.body.outlet == 1? 1 : 0,        
            stock: req.body.stock,
            modelId: req.body.modelId,
            markId: req.body.markId,
            genreId: req.body.genreId,
            measureId: req.body.measureId,
            destacado: req.body.destacado == 1? 1 : 0,
            image: req.file.filename
        }
        )
        .then(()=>{
            return res.redirect('/administrar');
        })
        .catch(error => res.send(error)) 
        
    }, 
    view: (req, res) => {
        Products.findByPk(req.params.id, {
            include:['mark', 'model', 'genre', 'measure']
        })  
            .then(products => {
                res.render (path.resolve(__dirname, '../views/web/admin/adminView.ejs'), {styles: cssAdminView, products})
            });
    },
    edit:  (req, res) => {
        const products = Products.findByPk(req.params.id, {
            include:['mark', 'model', 'genre', 'measure']
        })
        const mark = Marks.findAll();
        const genre = Genres.findAll();
        const measure = Measures.findAll();
        const model = Models.findAll();
        Promise.all([mark, genre, products, measure, model]) 
        .then(([mark, genre, products, measure, model]) => {
            //return res.send();
            return res.render (path.resolve(__dirname, '../views/web/admin/adminEdit.ejs'), {styles: cssAdminEdit, model, products, mark, genre, measure});
          }) .catch (error => res.send(error));
    },
    update: (req, res) => {
<<<<<<< HEAD

        Products.findByPk(req.params.id) .then (i => {
=======
        //return res.send(req.params.id)
        db.Product.findByPk(req.params.id) 
        .then (i => {
>>>>>>> 2a0a4fffb42904754edb8a6e0ea54d9a96bebb7f
            let oldImage = i.image
            Products.update({
            price: req.body.price,
            outlet: req.body.outlet == 1? 1 : 0,        
            stock: req.body.stock,
            modelId: req.body.modelId,
            markId: req.body.markId,
            genreId: req.body.genreId,
            measureId: req.body.measureId,
            destacado: req.body.destacado == 1? 1 : 0,
            image: req.file? req.file.filename : oldImage
            },
            {where: {id: req.params.id}}
            ) 
            .then(()=>{
                return res.redirect('/administrar');
            })
            .catch(error => res.send(error))
    
        })
    },
    delete:  (req, res) => {
        Products.findByPk(req.params.id, {
            include:['mark', 'model', 'genre', 'measure']
        })
            .then(products => {
                res.render(path.resolve(__dirname, '../views/web/admin/adminDelete.ejs'), {styles: cssAdminDelete, products});
            });
    },
    destroy:  function (req, res)  {
        Products.destroy({
            where: { id: req.params.id}
           }
        )
        .then(()=>{
            return res.redirect('/administrar');
        })
        .catch(error => res.send(error))
    }
}

module.exports = adminController;




