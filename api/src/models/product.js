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
                  'Platos_Tipicos',
                  'Bebidas',
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
                    'Platos_Tipicos',
                  'Bebidas_sin_alcohol',
                  'Bebidas_con_alcohol',
                  'Postres_Tradicionales',
                  'Comida_Kiosco',
                ];
                if (!validSubCategories.includes(value)) {
                    throw new Error('Invalid subCategory');
                  }
              },
            },
          },
          salesTypes: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
            validate: {
                isValidSubCategory(value) {
                    const validSubCategories = ['Salon', 'Kiosco'];
                    const subCategories = value ? value.split(',').map(v => v.trim()) : [];
                    for (const subCategory of subCategories) {
                        if (!validSubCategories.includes(subCategory)) {
                            throw new Error('Invalid subCategory');
                        }
                    }
                },
            },
        }
        
    },
    {timestamps: false,
        paranoid: true,
    }
)
};