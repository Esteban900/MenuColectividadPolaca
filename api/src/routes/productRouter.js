const { Router } = require('express');
const {
    createProductHandler,
    getProductsHandler,
    getIdProductHandler,
    updateProductHandler,
    deleteProductHandler
} = require('../handlers/Product/productHandlers');

const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

const productRouter = Router();

// Crear un nuevo producto (requiere rol 'editor' o 'admin')
productRouter.post('/',authenticateToken, authorizeRoles('editor', 'admin'), createProductHandler);

// Obtener todos los productos
productRouter.get('/', getProductsHandler);

// Obtener un producto por ID
productRouter.get('/:id', getIdProductHandler);

// Actualizar un producto por ID (requiere rol 'editor' o 'admin')
productRouter.put('/:id',authenticateToken, authorizeRoles('editor', 'admin'), updateProductHandler);

// Eliminar un producto por ID (requiere rol 'editor' o 'admin')
productRouter.delete('/:id',authenticateToken, authorizeRoles('editor', 'admin'), deleteProductHandler);

module.exports = productRouter;



// const { Router } = require('express');

// // const {getProductsHandler} = require('../handlers/Product/getProductHandler');
// const {getIdProductHandler} = require('../handlers/Product/getProductHandler');



// const productRouter = Router();


// // productRouter.get('/', getProductsHandler);
// productRouter.get('/:id', getIdProductHandler);



// module.exports = productRouter;