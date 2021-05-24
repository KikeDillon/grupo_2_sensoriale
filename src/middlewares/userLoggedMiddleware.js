function userLoggedMiddleware (req, res, next){
    res.locals.userLogged = false;
    res.locals.userType = false;
    if(req.session && req.session.usuarioLogueado){
        res.locals.userLogged = true;
        res.locals.userType = req.session.usuarioLogueado.userType;
    }
    next();
}

module.exports = userLoggedMiddleware;