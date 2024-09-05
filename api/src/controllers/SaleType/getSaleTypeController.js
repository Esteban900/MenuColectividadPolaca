const { Product, SaleType } = require('../../db');
const { Op } = require('sequelize');
const getSaleTypeController = async (tipo_venta) => {
    try {
        // const saleType = await Product.findAll({
        //     where: { salesTypes: tipo_venta },
        //     // include: Product, // Incluye los productos relacionados
        //     // include: [
        //     //     {
        //     //         model:Product,
        //     //         attributes: ['id_product', 'name','description','imageUrl','cost','availability','category','subCategory'],
        //     //     },
                
        //     // ]
        //     through: {
        //         attributes: [],
        //       },
        // });
        // return saleType;
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