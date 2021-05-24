module.exports = (sequelize, dataTypes) =>{
    
    let alias = "Mark";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        mark: {
            type: dataTypes.STRING,
        }
    }
    let config = {
        tableName: "marks",
        timestamps: false
    }
    const Mark = sequelize.define (alias, cols, config);

    Mark.associate = (models) =>{
        Mark.hasMany (models.Modelo,{
            as: "modelos",
            foreignkey: "markId"
        }),
        Mark.hasMany (models.Product,{
            as: "products",
            foreignkey: "markId"
        })
    }
    return Mark;
}