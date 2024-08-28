const { Product, SaleType, Category, SubCategory } = require('../../db');

const getSubCategoryController = async (tipo_venta, categoria, sub_categoria) => {
    try {
        const subCategory = await Product.findAll({
            include: [
                {
                    model: SaleType,
                    where: { name_lugar_venta: tipo_venta },
                },
                {
                    model: Category,
                    where: { name_category: categoria },
                },
                {
                    model: SubCategory,
                    where: { name_subCategory: sub_categoria },
                },
            ],
        });
        return subCategory;
    } catch (error) {
        throw error;
    }
};

module.exports = getSubCategoryController;