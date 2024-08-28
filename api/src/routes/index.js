const { Router } = require ('express');

const productRouter = require ('./productRouter');
const menuRouter = require('./menuRouter');

const mainRouter = Router();

mainRouter.use('/product', productRouter);
mainRouter.use('/menu', menuRouter);

module.exports = mainRouter;