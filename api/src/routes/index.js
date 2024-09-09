const { Router } = require ('express');

const productRouter = require ('./productRouter');
const menuRouter = require('./menuRouter');
const saleTypeRouter = require('./saleTypeRouter');
const categoryRouter = require('./categoryRouter');
const subCategoryRouter = require('./subCategoryRouter');

const userRouter = require('./userRouter');
const authRouter = require('./authRouter');

const mainRouter = Router();

// Ruta para la raíz '/'
mainRouter.get('/', (req, res) => {
    res.send('Bienvenido a la API de MenuColectividadPolaca');
  });

mainRouter.use('/product', productRouter);
mainRouter.use('/menu', menuRouter);
mainRouter.use('/saletype', saleTypeRouter);
mainRouter.use('/category', categoryRouter)
mainRouter.use('/subCategory', subCategoryRouter)
// mainRouter.use('/users', userRouter); // Añadir la ruta de usuarios
// mainRouter.use('/auth', authRouter);




module.exports = mainRouter;