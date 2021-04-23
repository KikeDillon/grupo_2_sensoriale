const db = require ('../database/models/index.js');

function cookieMiddleware (req, res, next){
    let userCookieEmail = "";
    if(req.cookies.rememberCookie && !req.session.usuarioLogueado){
        userCookieEmail = req.cookies.rememberCookie;
        db.User.findAll()
            .then (function(users){                             // tomo la base de ususarios a un array
                let user = users.find (function(i){             // usamos el find para encontrar el usuario ingresado por req.body.useremail
                    return userCookieEmail == i.email;           // devuelvo el resultado a user si encuentro el usuario ingresado. se busca en el array users
                })
                req.session.usuarioLogueado = user;
                next();
            })
    }else{
        next();
    }

}
module.exports = cookieMiddleware;
