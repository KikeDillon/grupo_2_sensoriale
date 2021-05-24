module.exports = function (sequelize, dataTypes) {
    let alias = 'Marks';

    let cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true
        } ,
        mark :{
            type: dataTypes.STRING(50),
            allowNull: false
        }

    }
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    let Marks = sequelize.define(alias, cols, config)

    Marks.associate = function(models) {
        Marks.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'markId'
        })
    }

    return Marks
}