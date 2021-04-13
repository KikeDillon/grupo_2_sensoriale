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
        user_id:{
            type: dataTypes.INTEGER,
        },
        product_id:{
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: "users",
        timestamps: false
    }

    const Carrito = sequelize.define (alias, cols, config);

    Carrito.associate = (models) =>{
        Carrito.belongsTo (models.User,{
            as: "users",
            foreignkey: "user_id"
        });
    }

    return Carrito;
}