const { Router } = require('express');
const {
    createSaleTypeHandler,
    getAllSaleTypesHandler,
    getSaleTypeByIdHandler,
    updateSaleTypeHandler,
    deleteSaleTypeHandler
} = require('../handlers/SaleType/saleTypeHandler');

const saleTypeRouter = Router();

// Crear un nuevo SaleType
saleTypeRouter.post('/', createSaleTypeHandler);

// Obtener todos los SaleTypes
saleTypeRouter.get('/', getAllSaleTypesHandler);

// Obtener un SaleType por ID
saleTypeRouter.get('/:id', getSaleTypeByIdHandler);

// Actualizar un SaleType por ID
saleTypeRouter.put('/:id', updateSaleTypeHandler);

// Eliminar un SaleType por ID
saleTypeRouter.delete('/:id', deleteSaleTypeHandler);

module.exports = saleTypeRouter;