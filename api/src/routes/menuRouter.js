const { Router } = require('express');
const { getProductsHandler } = require('../handlers/Product/getProductHandler');
const getSaleTypeHandler  = require('../handlers/SaleType/getSaleTypeHandler');
const getProductsByCategoryHandler = require('../handlers/Category/getCategoryHandler');
const getSuBCategoryHandler = require('../handlers/SubCategory/getSubCategoryHandler');
const menuRouter = Router();


// menuRouter.get('/', getProductsHandler);

// Ruta para cargar los tipos de venta (Salón, Kiosco)
menuRouter.get('/:tipo_venta', getSaleTypeHandler);

// Ruta para cargar las categorías según el tipo de venta (platos, bebidas, postres)
menuRouter.get('/:tipo_venta/:categoria', getProductsByCategoryHandler );

// Ruta para cargar los productos según la subcategoría dentro de la categoría y tipo de venta
menuRouter.get('/:tipo_venta/:categoria/:subcategoria', getSuBCategoryHandler);

module.exports = menuRouter;