module.exports = function (sequelize, dataTypes) {
    let alias = 'Marks';

    let cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey: true
            //autoIncrement : true
        } ,
        marks :{
            type: dataTypes.STRING
        },
        models_id : {
            type: dataTypes.INTEGER
        } ,
        measure_id : {
            type: dataTypes.INTEGER
        }

        
    }
    let config = {
        tableName: 'marks',
        timestamps: false
    }

    let Marks = sequelize.define(alias, cols, config)

    Marks.associate = function(models) {
        Marks.hasMany(models.Models), {
            as: 'models',
            foreignKey: 'models_id'
        },
        Marks.hasMany(models.Measure), {
            as: 'measure',
            foreignKey: 'measure_id'
        }
    }

    return Marks
}