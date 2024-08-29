const { Router } = require('express');
const {
    createProductHandler,
    getProductsHandler,
    getIdProductHandler,
    updateProductHandler,
    deleteProductHandler
} = require('../handlers/Product/productHandlers');

const productRouter = Router();

// Crear un nuevo producto
productRouter.post('/', createProductHandler);

// Obtener todos los productos
productRouter.get('/', getProductsHandler);

// Obtener un producto por ID
productRouter.get('/:id', getIdProductHandler);

// Actualizar un producto por ID
productRouter.put('/:id', updateProductHandler);

// Eliminar un producto por ID
productRouter.delete('/:id', deleteProductHandler);

module.exports = productRouter;



// const { Router } = require('express');

// // const {getProductsHandler} = require('../handlers/Product/getProductHandler');
// const {getIdProductHandler} = require('../handlers/Product/getProductHandler');



// const productRouter = Router();


// // productRouter.get('/', getProductsHandler);
// productRouter.get('/:id', getIdProductHandler);



// module.exports = productRouter;