function carritoMiddleware (req, res, next){
    if(req.session && req.session.usuarioLogueado){
        console.log (req.session.usuarioLogueado+'lsdjhjksdhfkjsdhkjhaskjaskdkd')
        next();
    }else{
        return res.redirect('/ingresar')
    }
}

module.exports = carritoMiddleware;