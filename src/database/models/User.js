module.exports = (sequelize, dataTypes) =>{
    let alias = "User";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firs_name: {
            type: dataTypes.STRING,
        },
        last_name:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
        password:{
            type: dataTypes.STRING,
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
    return User;
}