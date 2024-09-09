const { Op } = require('sequelize');
const { Product } = require('../../db');

const getSubCategoryController = async (tipo_venta, categoria, subcategoria) => {
      
    const formatCategory = categoria.replace(/\s+/g, '_')

    const formattedSubCategory = subcategoria.replace(/\s+/g, '_');
       
    try {    
     
        const subCategory = await Product.findAll({
                        where: {
                           //salesTypes:tipo_venta,
                            category: formatCategory,          // Filtra por categoría
                            salesTypes: { [Op.like]: `%${tipo_venta}%` },
                            subCategory: formattedSubCategory
                        },
                        attributes: [
                            'id_product',
                            'name',
                            'description',
                            'imageUrl',
                            'cost',
                            'availability',
                            // 'category',
                            // 'subCategory',
                             //'salesTypes',
                        ],
                        order: [['id_product', 'ASC']]
                    });

        return subCategory;
    } catch (error) {
        throw error;
    }
};

module.exports = getSubCategoryController;