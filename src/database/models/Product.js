module.exports = function (sequelize, dataTypes) {
    let alias = 'Products';

    let cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        price :{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        outlet : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        stock : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        markId : {
            type: dataTypes.INTEGER,
            allowNull: false
        },        
        modelId : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        genreId : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        measureId : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        destacado : {
            type: dataTypes.INTEGER
        },
        image : {
            type: dataTypes.STRING
        }
       

        
    }
    
    let config = {
        tableName: "products",
        timestamps: false
    }

    let Products = sequelize.define(alias, cols, config)

    Products.associate = function(models) {
        Products.belongsTo(models.Marks, {
            as: 'mark',
            foreignKey: 'markId'
        }),
        Products.belongsTo(models.Genres, {
            as: 'genre',
            foreignKey: 'genreId'
        }),
        Products.belongsTo(models.Models, {
            as: 'model',
            foreignKey: 'modelId'
        }),
        Products.belongsTo(models.Measures, {
            as: 'measure',
            foreignKey: 'measureId'
        })

    }

    return Products
}