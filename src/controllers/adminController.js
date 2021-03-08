const path = require('path');
const fs = require('fs')

const cssadmin = ['footer', 'header', 'tablet', 'notebook', 'admin'];
const csscreate = ['footer', 'header', 'tablet', 'notebook', 'create'];


module.exports = {
    admin: function (req,res){
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json'), {encoding: 'utf-8'}));
        //return res.send(products);
        res.render (path.resolve(__dirname, '../views/admin/admin'), {styles: cssadmin, products });
    },
    create: (req, res) => {
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json'), {encoding: 'utf-8'}));
        res.render (path.resolve(__dirname, '../views/admin/create'), {styles: csscreate, products });
    },
    save: (req, res) => {
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json'), {encoding: 'utf-8'}));
        let lastProduct = products.pop()
        products.push(lastProduct);
        let newProduct= {
            id: lastProduct.id+ 1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            descuento: req.body.precio,
            images: req.body.filename
        }
        products.push(newProduct);
        let newProductSave = JSON.stringify(products, null, 2)
    }
}
