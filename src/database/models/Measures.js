module.exports = function (sequelize, dataTypes) {
    let alias = 'Measures';

    let cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey: true
            //autoIncrement : true
        } ,
        marks :{
            type: dataTypes.INTEGER
        }

        
    }
    let config = {
        tableName: 'measures',
        timestamps: false
    }

    let Measures = sequelize.define(alias, cols, config)
    
    Measures.associate = function(models) {
        Measures.belongsTo(models.Marks), {
            as: 'marks',
            foreignKey: 'measure_id'
        }
        Measures.belongsTo(models.Product), {
            as: 'products',
            foreignKey: 'measure_id'
        }
    }

    return Measures
}