const { SaleType, Category, Product } = require('../../db');

// Crear un SaleType
const createSaleType = async (name_lugar_venta) => {
    try {
        const newSaleType = await SaleType.create({ name_lugar_venta });
        return newSaleType;
    } catch (error) {
        throw error;
    }
};

// Obtener todos los SaleTypes
// const getAllSaleTypes = async () => {
//     try {
//         const saleTypes = await SaleType.findAll({
//             include: [
//                 {
//                     model: Category,
//                     attributes: ['id_category', 'name_category'],
//                     through: {
//                         attributes: [],
//                       },
//                 }
//             ]
//         });
//         return saleTypes;
//     } catch (error) {
//         throw error;
//     }
// };
const getAllSaleTypes = async () => {
    try {
        const saleTypes = await SaleType.findAll();
        return saleTypes;
    } catch (error) {
        throw error;
    }
};

// Buscar SaleType por ID
const searchSaleTypeById = async (id) => {
    try {
        const saleType = await SaleType.findByPk(id);
        if (!saleType) {
            throw new Error(`ID de SaleType no existe, ID=${id}`);
        }
        return saleType;
    } catch (error) {
        throw error;
    }
};

// Actualizar SaleType
const updateSaleType = async (id, updates) => {
    try {
        const saleType = await SaleType.findByPk(id);
        if (!saleType) {
            throw new Error(`ID de SaleType no existe, ID=${id}`);
        }
        await saleType.update(updates);
        return saleType;
    } catch (error) {
        throw error;
    }
};

// Eliminar SaleType
const deleteSaleType = async (id) => {
    try {
        const saleType = await SaleType.findByPk(id);
        if (!saleType) {
            throw new Error(`ID de SaleType no existe, ID=${id}`);
        }
        await saleType.destroy();
        return saleType;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createSaleType,
    getAllSaleTypes,
    searchSaleTypeById,
    updateSaleType,
    deleteSaleType
};