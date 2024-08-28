const { Product, SaleType } = require('../../db');

const getSaleTypeController = async (tipo_venta) => {
    try {
        const saleType = await SaleType.findOne({
            where: { name_lugar_venta: tipo_venta },
            include: Product, // Incluye los productos relacionados
        });
        return saleType;
    } catch (error) {
        throw error;
    }
}

module.exports = getSaleTypeController;