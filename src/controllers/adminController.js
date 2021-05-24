const { readFileSync } = require('fs');
//const path = require('path');
//sconst fs = require ('fs');

const path = require('path');
const {Products, Marks, Genres, Models, Measures} = require('../database/models');
//const sequelize = sequelize;
//const { Op } = require("sequelize");
//const { values } = require('sequelize/types/lib/operators');

const cssAdminIndex = ['footer', 'header', 'tablet', 'admin/adminIndex'];
const cssAdminView = ['footer', 'header', 'tablet', 'admin/adminView'];
const cssAdminDelete = ['footer', 'header', 'tablet', 'admin/adminDelete'];
const cssAdminCreate = ['footer', 'header', 'tablet', 'admin/adminCreate'];
const cssAdminEdit = ['footer', 'header', 'tablet', 'admin/adminEdit'];

const adminController = {
    /*.findAll({
        where: {categoryId : req.query.categoria},
        include: [{association: 'category'}]
    })
    .findByPk(req.params.id, {
            include: ['category']
        })
    */

    admin: function(req, res) {
        Products.findAll({
            include:['mark', 'model', 'genre']
        })
         //return res.send(products.mark+'-------------------------------------------------------------')
        //const mark = Marks.findAll();
        //Promise.all([ products])
        .then(products => {
            //return res.send(products)
            return res.render (path.resolve(__dirname, '../views/web/admin/adminIndex.ejs'), {styles: cssAdminIndex, products})
        }).catch (resultado => {
            console.log(resultado)
        })
    },
    create: function (req, res){
            /*const platos = Dish.findAll();
            const categorias = Category.findAll();
            Promise.all([platos,categorias])
            .then(([platos,categorias]) =>{
                //return res.send(platos)
                res.render(path.resolve(__dirname , '..','views','productos','productos') , {platos,categorias});
            })           
            .catch(error => res.send(error))
        },*/
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
            destacado: req.body.destacado,
            //image: req.file.image
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
        //return res.send(req.params.id)
        Products.update({
            price: req.body.price,
            outlet: req.body.outlet == 1? 1 : 0,        
            stock: req.body.stock,
            modelId: req.body.modelId,
            markId: req.body.markId,
            genreId: req.body.genreId,
            measureId: req.body.measureId,
            destacado: req.body.destacado,
        },
        {where: {id: req.params.id}}
        ) 
        .then(()=>{
            return res.redirect('/administrar');
        })
        .catch(error => res.send(error))
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




/*admin: function (req,res){
        let products = JSON.parse (fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        res.render (path.resolve(__dirname, '../views/web/admin/adminIndex.ejs'), {styles: cssAdminIndex, products});
    },
    view: function (req, res){
        let products = JSON.parse (fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        let unProducto = null;
        products.forEach(i => {
            if (i.id == req.params.id){
                unProducto = i;
            }
        });
        res.render (path.resolve(__dirname, '../views/web/admin/adminView.ejs'), {styles: cssAdminView, unProducto})
    },
    create: function (req, res){
        let perfumeM = JSON.parse (fs.readFileSync(path.resolve(__dirname, '../data/mark.json')));
        return res.render (path.resolve(__dirname, '../views/web/admin/adminCreate.ejs'), {styles: cssAdminCreate, perfumeM});
    },
    save: function (req, res){
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        let lastProduct = products.pop();
        products.push(lastProduct);
        let newPerfume = {
            id: lastProduct.id + 1,
            mark : req.body.mark,
            model: "pendiente",
            price: req.body.price,
            outlet: req.body.outlet == 1? 1 : 0,
            size: req.body.size,
            gender: req.body.gender,
            image: req.file.filename
        }
        products.push(newPerfume);
        let newPerfumeSave = JSON.stringify(products,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/products.json'), newPerfumeSave);
        return res.redirect('/administrar');
    },
    edit: function (req,res){
        let perfumeM = JSON.parse (fs.readFileSync(path.resolve(__dirname, '../data/mark.json')));
        let products = JSON.parse (fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        let unProducto = null;
        products.forEach(i => {
            if (i.id == req.params.id){
                unProducto = i;
            }
        });
        return res.render (path.resolve(__dirname, '../views/web/admin/adminEdit.ejs'), {styles: cssAdminEdit, unProducto, perfumeM})
    },
    update: function (req, res){
        let products = JSON.parse (fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        perfumeId = req.params.id;
        let newArrayPerfume = products.map(function (i){    
            if (i.id == perfumeId){
                oldImage = i.image;
                let newPerfume = {
                    id: perfumeId,
                    mark : req.body.mark,
                    model: "pendiente",
                    price: req.body.price,
                    outlet: req.body.outlet == 1? 1 : 0,
                    size: req.body.size,
                    gender: req.body.gender,
                    image: req.file? req.file.filename : oldImage
                }
                return newPerfume;         
            }
            return i;
        });
        let newPerfumeSave = JSON.stringify(newArrayPerfume,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/products.json'), newPerfumeSave);
        return res.redirect('/administrar');
    },
    delete: function (req,res){
        let products = JSON.parse (fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        let unProducto = null;
        products.forEach(i => {
            if (i.id == req.params.id){
                unProducto = i;
            }
        });
        return res.render (path.resolve(__dirname, '../views/web/admin/adminDelete.ejs'), {styles: cssAdminDelete, unProducto})
    },
    destroy: function (req,res){
        let products = JSON.parse (fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        let perfumeDeleteId = req.params.id;
        let perfumeNewFile = products.filter(function(i){
            return (i.id != perfumeDeleteId);
        });
        let perfumeSave = JSON.stringify(perfumeNewFile,null,2)
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'),perfumeSave);
        return res.redirect('/administrar');
    }*/
