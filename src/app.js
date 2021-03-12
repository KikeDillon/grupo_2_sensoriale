const express = require ('express');
const app = express ();
const path = require ('path');
const methodOverride = require('method-override');

//ELEMENTOS ESTÁTICOS
const publicpath = path.resolve (__dirname, '../public');
app.use (express.static(publicpath));

app.set ('view engine', 'ejs'); //EJS necesario
app.use(express.urlencoded({ extended: false })); //MULTER necesario
app.use(methodOverride('_method')); //METODO GET y POST en HTML necesario


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



//LEVANTO EL SERVIDOR
app.set ('puerto', process.env.PORT || 3000);

app.listen (app.get ('puerto'), function(){
    console.log ("LEVANTÓ EL SERVIDOR EN EL PUERTO 3000");
});

app.use (function(req, res, next){
    res.status(404).render(path.resolve(__dirname, './views/web/404-page.ejs'));
    next();
});