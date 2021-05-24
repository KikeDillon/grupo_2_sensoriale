module.exports = (sequelize, dataTypes) =>{
    
    let alias = "Modelo";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        model: {
            type: dataTypes.STRING,
        },
        markId: {
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: "models",
        timestamps: false
    }

    const Modelo = sequelize.define (alias, cols, config);

    Modelo.associate = (models) =>{
        Modelo.belongsTo (models.Mark,{
            as: "mark",
            foreignkey: "markId"
        }),
        Modelo.hasMany (models.Product,{
            as: "product",
            foreignKey: "modelId"
        })
    }
    return Modelo;

}