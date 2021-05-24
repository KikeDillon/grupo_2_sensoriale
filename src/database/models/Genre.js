module.exports = (sequelize, dataTypes) =>{
    
    let alias = "Genre";

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        genre: {
            type: dataTypes.STRING,
        }
    }
    let config = {
        tableName: "genres",
        timestamps: false
    }
    const Genre = sequelize.define (alias, cols, config);

    Genre.associate = (models) =>{
        Genre.hasMany (models.Product,{
            as: "products",
            foreignkey: "genreId"
        });
    }

    return Genre;
}