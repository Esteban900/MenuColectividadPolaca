const  DataTypes  = require('sequelize');
module.exports = (sequelize) => {
sequelize.define(
    'Product',
    {
        id_product: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        cost:{
            type:DataTypes.FLOAT,
            allowNull: false,
        },
        availability: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        
    },
    {timestamps: false,
        paranoid: true,
    }
)
};