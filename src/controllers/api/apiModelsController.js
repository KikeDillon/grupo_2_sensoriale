const db = require ('../../database/models');

module.exports = {
    index: (req, res) => {
        db.Modelo
            .findAll()
            .then (modelos => {
                return res.json (modelos);
            })
    },
    products: (req, res) => {
        db.Product
            .findAll()
            .then (productos => {
                return res.json (productos);
            })
    },
    users: (req, res) => {
        db.User
            .findAll()
            .then (users => {
                return res.json (users);
            })
    }
}