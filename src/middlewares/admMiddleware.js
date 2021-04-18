function admMiddleware (req, res, next){
    if(req.session && req.session.usuarioLogueado){
        if ( req.session.usuarioLogueado.user_type === 1){
            next();
        }else{
            return res.redirect('/')
        }
    }else{
        return res.redirect ('/');
    }
}

module.exports = admMiddleware;