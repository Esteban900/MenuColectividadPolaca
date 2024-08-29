const { Product, SaleType, Category, SubCategory } = require('../../db');

const getSubCategoryController = async (tipo_venta, categoria, subcategoria) => {
    try {
        
        const subCategory = await SaleType.findAll({
            where: { name_lugar_venta: tipo_venta },
            include: [
                {
                    model: Product,
                    // where: { category: categoria,subCategory: sub_categoria },
                    where: {
                        category: categoria,        // Filtra por la categoría que pasas como parámetro
                        subCategory: subcategoria, // Filtra por la subcategoría que pasas como parámetro
                    },
                    attributes: ['id_product', 'name','description','imageUrl','cost','availability','category','subCategory'],
                    through: {
                        attributes: [],
                      },
                },
            ],
        });
        return subCategory;
    } catch (error) {
        throw error;
    }
};

module.exports = getSubCategoryController;