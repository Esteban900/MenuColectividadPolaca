const  DataTypes  = require('sequelize');
module.exports = (sequelize) => {
sequelize.define(
    'Category',
    {
        id_category: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name_category: {
          type: DataTypes.STRING,
          allowNull: false,
          },      
    },
    {timestamps: false,
        paranoid: true,
    }
)
};