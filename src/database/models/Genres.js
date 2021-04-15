module.exports = function (sequelize, dataTypes) {
    let alias = 'Genre';

    let cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey: true
           // autoIncrement : true
        } ,
        genre :{
            type: dataTypes.STRING(100),
        },
        models_id : {
            type: dataTypes.INTEGER,
            autoIncrement: true
        } 

        
    }
    let config = {
        tableName: 'genres',
        timestamps: false
    }

    let Genre = sequelize.define(alias, cols, config)

    Genre.associate = function(models) {
        Genre.hasMany(models.Models), {
            as: 'models',
            foreignKey: 'models_id'
        }
    }
    return Genre
}