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
        category: {
            type: DataTypes.STRING, 
            allowNull: true,
            defaultValue: null,
            validate: {
              isValidCategory(value) {
                const validCategories = [
                  'Platos',
                  'Bebidas',
                  'Postres',
                ];
                if (!validCategories.includes(value)) {
                    throw new Error('Invalid category');
                  }
              },
            },
          },
          subCategory: {
            type: DataTypes.STRING, 
            allowNull: true,
            defaultValue: null,
            validate: {
              isValidSubCategory(value) {
                const validSubCategories = [
                    'Platos_tipicos',
                  'Bebida_sin_alcohol',
                  'Bebida_con_alcohol',
                  'Postres',
                  'Comida_Kiosco',
                ];
                if (!validSubCategories.includes(value)) {
                    throw new Error('Invalid subCategory');
                  }
              },
            },
          },
        
    },
    {timestamps: false,
        paranoid: true,
    }
)
};