const  DataTypes  = require('sequelize');
module.exports = (sequelize) => {
sequelize.define(
    'SubCategory',
    {
        id_subCategory: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },    
        name_subCategory: {
          type: DataTypes.STRING,
          allowNull: false,
          },
    },
    {timestamps: false,
        paranoid: true,
    }
)
};