const { readFileSync } = require('fs');
const path = require('path');
const fs = require ('fs');

const db = require ('../database/models/index.js');

const cssAdminIndex = ['footer', 'header', 'tablet', 'admin/adminIndex'];
const cssAdminView = ['footer', 'header', 'tablet', 'admin/adminView'];
const cssAdminDelete = ['footer', 'header', 'tablet', 'admin/adminDelete'];
const cssAdminCreate = ['footer', 'header', 'tablet', 'admin/adminCreate'];
const cssAdminEdit = ['footer', 'header', 'tablet', 'admin/adminEdit'];

const adminController = {
    admin: function(req, res) {
        db.Product.findAll({
            include:['mark', 'model', 'genre']
        })
            //return res.send(products.mark+'-------------------------------------------------------------')
        //const mark = Marks.findAll();
        //Promise.all([ products])
        .then(products => {
            //return res.send(products)
            return res.render (path.resolve(__dirname, '../views/web/admin/adminIndex.ejs'), {styles: cssAdminIndex, products})
        })
    },
    view: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include:['mark', 'model', 'genre', 'measure']
        })  
            .then(products => {
                res.render (path.resolve(__dirname, '../views/web/admin/adminView.ejs'), {styles: cssAdminView, products})
            });
    },
    create: function (req, res){
        let consultaMarca = db.Mark.findAll();
        let consultaGenero =  db.Genre.findAll();
        let consultaMeasure = db.Measure.findAll();
        Promise.all([consultaMarca, consultaGenero, consultaMeasure])
            .then(([perfumeMarca, perfumeGenero, perfumeMeasure]) =>{
                return res.render (path.resolve(__dirname, '../views/web/admin/adminCreate.ejs'),{styles: cssAdminCreate, perfumeMarca: perfumeMarca, perfumeGenero: perfumeGenero, perfumeMeasure: perfumeMeasure})
        })
        .catch(error => res.send(error))
    },
    save: function(req, res) {
        db.Product.create(
            {
            markId: req.body.mark,
            modelId: req.body.model,
            genreId: req.body.genre,
            measureId: req.body.measure,
            price: req.body.price,
            outlet: req.body.outlet == 1? 1 : 0,        
            stock: req.body.stock,
            destacado: req.body.destacado == 1? 1 : 0,
            image: req.file.filename
        })
        .then(()=>{
            return res.redirect('/administrar')
        })
        .catch(error => res.send(error)) 
    },
    edit:  (req, res) => {
        const products = db.Product.findByPk(req.params.id, {
            include:['mark', 'model', 'genre', 'measure']
        })
        const mark = db.Mark.findAll();
        const genre = db.Genre.findAll();
        const measure = db.Measure.findAll();
        const model = db.Modelo.findAll();
        Promise.all([mark, genre, products, measure, model]) 
        .then(([mark, genre, products, measure, model]) => {
            //return res.send();
            return res.render (path.resolve(__dirname, '../views/web/admin/adminEdit.ejs'), {styles: cssAdminEdit, model, products, mark, genre, measure});
          }) .catch (error => res.send(error));
    },
    update: (req, res) => {
        //return res.send(req.params.id)
        db.Product.findByPk(req.params.id) 
        .then (i => {
            let oldImage = i.image
            db.Product.update({
                price: req.body.price,
                outlet: req.body.outlet == 1? 1 : 0,        
                stock: req.body.stock,
                modelId: req.body.modelId,
                markId: req.body.markId,
                genreId: req.body.genreId,
                measureId: req.body.measureId,
                image: req.file? req.file.filename : oldImage,
                destacado: req.body.destacado
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
        db.Product.findByPk(req.params.id, {
            include:['mark', 'model', 'genre', 'measure']
        })
            .then(products => {
                res.render(path.resolve(__dirname, '../views/web/admin/adminDelete.ejs'), {styles: cssAdminDelete, products});
            });
    },
    destroy:  function (req, res)  {
        db.Product.destroy({
            where: {id:req.params.id}
           }
        )
        .then(()=>{
            return res.redirect('/administrar');
        })
        .catch(error => res.send(error))
    }
}


module.exports = adminController;

/*        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
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
        fs.writeFileSync(path.resolve(__dirname,'../data/products.json'), newPerfumeSave);*/