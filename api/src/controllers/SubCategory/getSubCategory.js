const { Op } = require('sequelize');
const { Product, SaleType, Category, SubCategory } = require('../../db');

const getSubCategoryController = async (tipo_venta, categoria, subcategoria) => {
    try {
        
        const subCategory = await Product.findAll({
            where: {
                category: categoria,          // Filtra por categoría
                salesTypes: { [Op.like]: `%${tipo_venta}%` },
                subCategory: subcategoria
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
        return subCategory;
    } catch (error) {
        throw error;
    }
};

module.exports = getSubCategoryController;