const { Router } = require('express');
const {
    createCategoryHandler,
    getAllCategoryHandler,
    getCategoryByIdHandler,
    updateCategoryHandler,
    deleteCategoryHandler
} = require('../handlers/Category/categoryHandler');

const categoryRouter = Router();

// Crear un nuevo Category
categoryRouter.post('/', createCategoryHandler);

// Obtener todos los Category
categoryRouter.get('/', getAllCategoryHandler);

// Obtener un Category por ID
categoryRouter.get('/:id', getCategoryByIdHandler);

// Actualizar un Category por ID
categoryRouter.put('/:id', updateCategoryHandler);

// Eliminar un Category por ID
categoryRouter.delete('/:id', deleteCategoryHandler);

module.exports = categoryRouter;