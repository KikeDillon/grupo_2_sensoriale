function productMiddleware (req, res, next){
    
    if(req.params.genre){
        res.locals.productGenre = req.params.genre;
    }

    next();
}

module.exports = productMiddleware;