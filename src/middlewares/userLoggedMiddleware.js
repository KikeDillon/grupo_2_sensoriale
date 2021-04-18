function userLoggedMiddleware (req, res, next){
    res.locals.userLogged = false;
    res.locals.user_type = false;
    if(req.session && req.session.usuarioLogueado){
        res.locals.userLogged = true;
        res.locals.user_type = req.session.usuarioLogueado.user_type;
    }
    next();
}

module.exports = userLoggedMiddleware;