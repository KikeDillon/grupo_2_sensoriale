const express = require ('express');
const app = express ();
const path = require ('path');

app.set ('view engine', 'ejs');

//LEVANTO EL SERVIDOR
app.set ('puerto', process.env.PORT || 3000);

app.listen (app.get ('puerto'), function(){
    console.log ("LEVANTÓ EL SERVIDOR EN EL PUERTO 3000");
});

//Para indicarle express la carpeta donde se encuentran los archivos estáticos
//app.use(express.static(path.resolve(__dirname, '..', 'public')));
//Debemos indicar cual es el motor de plantillas que estamos usando EJS
//app.set('view engine','ejs');
//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//ELEMENTOS ESTÁTICOS
const publicpath = path.resolve (__dirname, '../public');
app.use (express.static(publicpath));

//RUTAS
const webRouter = require ('./routers/webRouter');
const userRouter = require ('./routers/userRouter');
const productsRouter = require ('./routers/productsRouter');
const saleRouter = require ('./routers/saleRouter');
const adminRouter = require ('./routers/adminRouter');
app.use (webRouter);
app.use (productsRouter);
app.use (userRouter);
app.use (saleRouter);
app.use (adminRouter);