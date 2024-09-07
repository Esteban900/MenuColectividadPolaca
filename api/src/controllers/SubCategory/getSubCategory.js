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

// const { Op } = require('sequelize');
// const { Product } = require('../../db');

// const getSubCategoryController = async (tipo_venta, categoria, subcategoria) => {
//     try {
        
//         const subCategory = await Product.findAll({
//             where: {
//                 category: categoria,          // Filtra por categoría
//                 salesTypes: { [Op.like]: `%${tipo_venta}%` },
//                 subCategory: subcategoria
//             },
//             attributes: [
//                 'id_product',
//                 'name',
//                 'description',
//                 'imageUrl',
//                 'cost',
//                 'availability',
//                 'category',
//                 'subCategory',
//                 'salesTypes'
//             ],
//         });
//         return subCategory;
//     } catch (error) {
//         throw error;
//     }
// };

// module.exports = getSubCategoryController;