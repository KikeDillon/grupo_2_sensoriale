module.exports = (sequelize, dataTypes) =>{
    
    let alias = "User";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
        },
        last_name:{
            type: dataTypes.STRING(100),
        },
        email:{
            type: dataTypes.STRING(100),
        },
        password:{
            type: dataTypes.STRING(100),
        },
        user_type:{
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: "users",
        timestamps: false
    }
    const User = sequelize.define (alias, cols, config);

    User.associate = (models) =>{
        User.hasMany (models.Carrito,{
            as: "carrito",
            foreignkey: "user_id"
        });
    }

    return User;
}