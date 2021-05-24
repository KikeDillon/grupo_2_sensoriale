module.exports = (sequelize, dataTypes) =>{
    
    let alias = "Product";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: dataTypes.INTEGER,
        },
        outlet: {
            type: dataTypes.INTEGER,
        },
        stock: {
            type: dataTypes.INTEGER,
        },
        markId: {
            type: dataTypes.INTEGER,
        },
        modelId: {
            type: dataTypes.INTEGER,
        },
        genreId: {
            type: dataTypes.INTEGER,
        },
        measureId: {
            type: dataTypes.INTEGER,
        },        
        destacado: {
            type: dataTypes.INTEGER,
        },
        image: {
            type: dataTypes.STRING,
        }
    }
    let config = {
        tableName: "products",
        timestamps: false
    }
    const Product = sequelize.define (alias, cols, config);

    Product.associate = (models) =>{
        Product.belongsTo (models.Mark,{
            as: "mark",
            foreignkey: "markId"
        }),
        Product.belongsTo (models.Modelo,{
            as: "model",
            foreignkey: "modelId"
        }),
        Product.belongsTo (models.Measure,{
            as: "measure",
            foreignkey: "measureId"
        }),
        Product.belongsTo (models.Genre,{
            as: "genre",
            foreignkey: "genreId"
        })
    }

    return Product;
}