const fs = require ('fs');
const path = require ('path');

function cookieMiddleware (req, res, next){
    let userCookieEmail = "";
    if(req.cookies.rememberCookie && !req.session.usuarioLogueado){
        userCookieEmail = req.cookies.rememberCookie;
        let users = JSON.parse (fs.readFileSync(path.resolve(__dirname, '../data/users.json'))); // array de datos sacado del json de usuarios
        let user = users.find (function(i){                    // usamos el find para encontrar el usuario ingresado por req.body.useremail
            return userCookieEmail == i.username;           // devuelvo el resultado a user si encuentro el usuario ingresado. se busca en el array users
        });
        req.session.usuarioLogueado = user;
        return res.redirect ('/');
    }
    next();
}

module.exports = cookieMiddleware;