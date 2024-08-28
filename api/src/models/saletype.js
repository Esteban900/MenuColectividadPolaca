const  DataTypes  = require('sequelize');
module.exports = (sequelize) => {
sequelize.define(
    'SaleType',
    {
        id_lugar_venta: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name_lugar_venta: {
          type: DataTypes.STRING,
          allowNull: false,
        },
       
      
    },
    {timestamps: false,
        paranoid: true,
    }
)
};