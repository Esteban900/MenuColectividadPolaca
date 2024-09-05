const { Op } = require('sequelize');
const { Category, Product, SaleType} = require('../../db');

const getCategoryController = async (tipo_venta, categoria) => {
    try {
              
        const category = await Product.findAll({
            where: {
                category: categoria,          // Filtra por categoría
                salesTypes: { [Op.like]: `%${tipo_venta}%` },
            },
            attributes: [
                'id_product',
                'name',
                'description',
                'imageUrl',
                'cost',
                'availability',
                'category',
                'subCategory',
                'salesTypes'
            ],
        });
                
        return category;

    } catch (error) {
        throw error;
    }
};

module.exports = getCategoryController;