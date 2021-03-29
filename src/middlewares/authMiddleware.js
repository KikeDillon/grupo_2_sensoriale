function authMiddleware (req, res, next){
    if (req.session.usuarioLogueado){
        next();
    }else{
        return res.redirect ('/ingresar');
    }
}

module.exports = authMiddleware;