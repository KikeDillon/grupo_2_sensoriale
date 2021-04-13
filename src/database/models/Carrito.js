module.exports = function (sequelize, dataTypes) {
    let alias = 'Carrito';

    let cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true
        } ,
        quantity :{
            type: dataTypes.INTEGER
        },
        estado : {
            type: dataTypes.INTEGER
        },
        user_id : {
            type: dataTypes.INTEGER
        } ,
        product_id : {
            type: dataTypes.INTEGER
        }

        
    }
    let config = {
        tableName: 'carrito',
        timestamps: false
    }

    let Carrito = sequelize.define(alias, cols, config)

    Carrito.associate = function(models) {
        Carrito.hasMany(models.Products), {
            as: 'products',
            foreignKey: 'product_id'
        }
    }

    return Carrito
}