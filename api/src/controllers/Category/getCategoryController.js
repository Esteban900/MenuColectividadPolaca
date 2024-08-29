const { where } = require('sequelize');
const { Category, Product, SaleType} = require('../../db');

const getCategoryController = async (tipo_venta, categoria) => {
    try {
        
        const category = await SaleType.findAll({
            where: { name_lugar_venta: tipo_venta },
            include: [
                {
                    model: Product,
                    where:{category:categoria},
                    attributes: ['id_product', 'name','description','imageUrl','cost','availability','category','subCategory'],
                    through: {
                        attributes: [],
                      },
                    include: [{
                        model: SaleType,
                        where: { name_lugar_venta: tipo_venta },
                        through: {
                            attributes: [],
                          },
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