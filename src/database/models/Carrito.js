module.exports = (sequelize, dataTypes) =>{
    let alias = "Carrito";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: dataTypes.INTEGER,
        },
        state:{
            type: dataTypes.INTEGER,
        },
        userId:{
            type: dataTypes.INTEGER,
        },
        productId:{
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: "carrito",
        timestamps: false
    }

    const Carrito = sequelize.define (alias, cols, config);

    Carrito.associate = (models) =>{
        Carrito.belongsTo(models.User, {
            as: "users",
            foreignkey: "userId"
        });
        Carrito.belongsTo(models.Products, {
            as: "product",
            foreignkey: "productId"
        });
    }

    return Carrito;
}