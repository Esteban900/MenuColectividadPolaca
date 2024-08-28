const { Router } = require('express');
const subcategory = require('../models/subcategory');



// 'Bebidas sin alcohol',
// 'Bebidas con alcohol',
// 'Tragos tipicos',
// 'Cafeteria',
// 'Salon',
// 'Kiosco',
// 'Postres tipicos',

const subCategoryRouter = Router();

subCategoryRouter.get('/bebidasSinAlcohol', getBebidasSinAlcoholHandler);
subCategoryRouter.get('/bebidasConAlcohol', getBebidasConAlcoholHandler);
subCategoryRouter.get('/tragosTipicos', getTragosTipicosHandler);
subCategoryRouter.get('/cafeteria', getCafeteriaHandler);
subCategoryRouter.get('/Salon', getSalonHandler);
subCategoryRouter.get('/postresTipicos', getPostresTipicosHandler);
subCategoryRouter.get('/kiosco', getKioskoHandler);
