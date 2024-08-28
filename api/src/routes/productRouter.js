const { Router } = require('express');

// const {getProductsHandler} = require('../handlers/Product/getProductHandler');
const {getIdProductHandler} = require('../handlers/Product/getProductHandler');



const productRouter = Router();


// productRouter.get('/', getProductsHandler);
productRouter.get('/:id', getIdProductHandler);



module.exports = productRouter;