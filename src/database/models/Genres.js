module.exports = function (sequelize, dataTypes) {
    let alias = 'Genres';

    let cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true
        } ,
        genre :{
            type: dataTypes.STRING(20),
        }

}
    let config = {
        tableName: 'genres',
        timestamps: false
    }

    let Genres = sequelize.define(alias, cols, config)

    Genres.associate = function(models) {
        Genres.hasMany(models.Products), {
            as: 'products',
            foreignKey: 'genreId'   
        }
    }
    return Genres
}