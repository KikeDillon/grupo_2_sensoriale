module.exports = function (sequelize, dataTypes) {
    let alias = 'Product';

    let cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey: true
            //autoIncrement : true
        } ,
        models_id : {
            type: dataTypes.INTEGER
        } ,
        measure_id : {
            type: dataTypes.INTEGER
        } ,
        price :{
            type: dataTypes.INTEGER
        },
        outlet : {
            type: dataTypes.INTEGER
        },
        stock : {
            type: dataTypes.INTEGER
        }

        
    }
    let config = {
        tableName: 'products',
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config)

    Product.associate = function(models) {
        Product.hasMany(models.Models), {
            as: 'models',
            foreignKey: 'models_id'
        },
        Product.hasMany(models.Measures), {
            as: 'measure',
            foreignKey: 'measure_id'
        },
        Product.belongsTo(models.Carrito), {
            as: 'carrito',
            foreignKey: 'product_id'
        }
    }

    return Product
}