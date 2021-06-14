const path = require('path');

const db = require ('../database/models');
const { Op } = require("sequelize");

const cssdetail = ['footer', 'header', 'tablet', 'detail'];
const cssselection = ['footer', 'header', 'tablet', 'selection'];

const {Products} = require('../database/models');



const productsController = {
    detail: function (req,res){
        Products.findByPk(req.params.id, {
            include: [{association: 'mark'}, {association: 'model'}, {association: 'measure'}]
<<<<<<< HEAD
        })  
        .then(products => {
            return res.send(products)
            return res.render (path.resolve(__dirname, '../views/products/detail.ejs'), {styles: cssdetail, products });
=======
        })
        .then (perfume => {
           // return res.json (perfume)
            return res.render (path.resolve(__dirname, '../views/products/detail.ejs'), {styles: cssdetail, perfume: perfume});
>>>>>>> 2a0a4fffb42904754edb8a6e0ea54d9a96bebb7f
        })
        .catch(error => res.send(error))
        //return res.render (path.resolve(__dirname, '../views/products/detail.ejs'), {styles: cssdetail });
    }, 
    selection: function (req,res){
        if (req.params.genre){
            switch (req.params.genre){
                case "hombres":
                    db.Product.findAll(
                        {where:{ genreId : { [Op.like]: '%2%'}},include:['mark', 'model', 'measure','genre']},
                        )
                        .then((perfumes)=>{
                            let marcasId = [];
                            let marcas = [];
                            let marca = ""
                            for (let i=0; i<perfumes.length; i++){
                                marca = perfumes[i].markId;
                                if(!marcasId.includes(marca)){
                                    marcas.push(perfumes[i].mark);
                                    marcasId.push(marca);
                                }
                            }
                            return res.render (path.resolve(__dirname, '../views/products/selection.ejs'), {styles: cssselection, perfumes: perfumes, marcas: marcas});
                        })
                break
                case "mujeres":
                    db.Product.findAll(
                        {where:{ genreId : { [Op.like]: '%1%'}},include:['mark', 'model', 'measure','genre']},
                        )
                        .then((perfumes)=>{
                            let marcasId = [];
                            let marcas = [];
                            let marca = ""
                            for (let i=0; i<perfumes.length; i++){
                                marca = perfumes[i].markId;
                                if(!marcasId.includes(marca)){
                                    marcas.push(perfumes[i].mark);
                                    marcasId.push(marca);
                                }
                            }
                            return res.render (path.resolve(__dirname, '../views/products/selection.ejs'), {styles: cssselection, perfumes: perfumes, marcas: marcas});
                        })
                break                    
                case "unisex":
                db.Product.findAll(
                    {where:{ genreId : { [Op.like]: '%3%'}},include:['mark', 'model', 'measure','genre']},
                    )
                    .then((perfumes)=>{
                        let marcasId = [];
                        let marcas = [];
                        let marca = ""
                        for (let i=0; i<perfumes.length; i++){
                            marca = perfumes[i].markId;
                            if(!marcasId.includes(marca)){
                                marcas.push(perfumes[i].mark);
                                marcasId.push(marca);
                            }
                        }
                        return res.render (path.resolve(__dirname, '../views/products/selection.ejs'), {styles: cssselection, perfumes: perfumes, marcas: marcas});
                })
                break
                case "outlet":
                db.Product.findAll(
                    {where:{ outlet : { [Op.like]: '%1%'}},include:['mark', 'model', 'measure','genre']},
                    )
                    .then((perfumes)=>{
                        let marcasId = [];
                        let marcas = [];
                        let marca = ""
                        for (let i=0; i<perfumes.length; i++){
                            marca = perfumes[i].markId;
                            if(!marcasId.includes(marca)){
                                marcas.push(perfumes[i].mark);
                                marcasId.push(marca);
                            }
                        }
                        return res.render (path.resolve(__dirname, '../views/products/selection.ejs'), {styles: cssselection, perfumes: perfumes, marcas: marcas});
                })
                break      
            }
        
        }
    }
}

module.exports = productsController;        

 //               console.log (res.locals.productGenre)

            // HaceR consultas para traer productores por género.

            // traer todas las marcas relacionadas al género

            // traer todos los modelos relacionados a la marca
