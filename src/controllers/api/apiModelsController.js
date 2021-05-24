const db = require ('../../database/models');

module.exports = {
    index: (req, res) => {
        db.Modelo
            .findAll()
            .then (modelos => {
                return res.json (modelos);
            })
    }
}