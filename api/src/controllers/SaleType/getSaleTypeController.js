const { Product, SaleType } = require('../../db');

const getSaleTypeController = async (tipo_venta) => {
    try {
        const saleType = await SaleType.findAll({
            where: { name_lugar_venta: tipo_venta },
            // include: Product, // Incluye los productos relacionados
            include: [
                {
                    model:Product,
                    attributes: ['id_product', 'name','description','imageUrl','cost','availability','category','subCategory'],
                         through: {
                             attributes: [],
                           },
                },
                
           ]
        });
        return saleType;
    } catch (error) {
        throw error;
    }
}

module.exports = getSaleTypeController;