module.exports = function (sequelize, dataTypes) {
    let alias = 'Genre';

    let cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true
        } ,
        genre :{
            type: dataTypes.STRING(20),
        },
        modelsId : {
            type: dataTypes.INTEGER

        
    }
}
    let config = {
        tableName: 'genres',
        timestamps: false
    }

    let Genre = sequelize.define(alias, cols, config)

    Genre.associate = function(models) {
        Genre.hasMany(models.Models), {
            as: 'model',
            foreignKey: 'models_id'
        }
    }
    return Genre
}