const { Router } = require ('express');

const productRouter = require ('./productRouter');
const menuRouter = require('./menuRouter');
const saleTypeRouter = require('./saleTypeRouter');
const categoryRouter = require('./categoryRouter');
const subCategoryRouter = require('./subCategoryRouter');


const mainRouter = Router();


mainRouter.use('/product', productRouter);
mainRouter.use('/menu', menuRouter);
mainRouter.use('/saletype', saleTypeRouter);
mainRouter.use('/category', categoryRouter)
mainRouter.use('/subCategory', subCategoryRouter)




module.exports = mainRouter;