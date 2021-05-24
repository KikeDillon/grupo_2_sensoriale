module.exports = (sequelize, dataTypes) =>{
    
    let alias = "Measure";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        measure: {
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: "measures",
        timestamps: false
    }
    const Measure = sequelize.define (alias, cols, config);

    Measure.associate = (models) =>{
        Measure.hasMany (models.Product,{
            as: "products",
            foreignkey: "measureId"
        });
    }

    return Measure;
}