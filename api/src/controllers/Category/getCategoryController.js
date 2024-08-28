const { Category, Product, SaleType} = require('../../db');

const getCategoryController = async (tipo_venta, categoria) => {
    try {
        
        const category = await Category.findOne({
            where: { name_category: categoria },
            include: [
                {
                    model: Product,
                    include: [{
                        model: SaleType,
                        where: { name_lugar_venta: tipo_venta }
                    }]
                }
            ]
        });
        return category;

    } catch (error) {
        throw error;
    }
};

module.exports = getCategoryController;