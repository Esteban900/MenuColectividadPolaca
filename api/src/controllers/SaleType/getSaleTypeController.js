const { Product, SaleType } = require('../../db');
const { Op } = require('sequelize');
const getSaleTypeController = async (tipo_venta) => {
    try {
       
        const products = await Product.findAll({
            where: {
                salesTypes: {
                    [Op.like]: `%${tipo_venta}%`, // Utiliza LIKE para buscar el tipo de venta dentro de la cadena
                },
            },
        });
        return products;
    } catch (error) {
        throw error;
    }
}

module.exports = getSaleTypeController;