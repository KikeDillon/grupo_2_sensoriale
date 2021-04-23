module.exports = function (sequelize, dataTypes) {
    let alias = 'Models';

    let cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true
        } ,
        model :{
            type: dataTypes.STRING(100),
            allowNull: false
        } 
    }
    let config = {
        tableName: 'models',
        timestamps: false
    }

    let Models = sequelize.define(alias, cols, config)

    Models.associate = function(models) {
        Models.hasMany(models.Product), {
            as: 'product',
            foreignKey: 'models_id'
        },
        Models.belongsTo(models.Genre), {
            as: 'genres',
            foreignKey: 'models_id'
        },
        Models.belongsTo(models.Marks), {
            as: 'marks',
            foreignKey: 'models_id'
        }
    }

    return Models
}