const db = require ('../../database/models');

module.exports = {
    index: (req, res) => {
        db.Models.findAll()
            .then (modelos => {
                return res.json (modelos);
            })
    }
}