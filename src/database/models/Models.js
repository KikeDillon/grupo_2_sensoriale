module.exports = function (sequelize, dataTypes) {
    let alias = 'Models';

    let cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey: true
            //autoIncrement : true
        } ,
        model :{
            type: dataTypes.STRING(100),
        },
        mark_id : {
            type: dataTypes.INTEGER
            } ,
        genre_id : {
            type: dataTypes.INTEGER
            }

        
    }
    let config = {
        tableName: 'models',
        timestamps: false
    }

    let Models = sequelize.define(alias, cols, config)

    Models.associate = function(models) {
        Models.belongsTo(models.Product), {
            as: 'products',
            foreignKey: 'models_id'
        },
        Models.belongsTo(models.Genre), {
            as: 'genres',
            foreignKey: 'genre_id'
        },
        Models.belongsTo(models.Marks), {
            as: 'marks',
            foreignKey: 'models_id'
        }
    }

    return Models
}