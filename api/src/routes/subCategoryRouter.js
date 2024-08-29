const { Router } = require('express');
const {
    createSubCategoryHandler,
    getAllSubCategoryHandler,
    getSubCategoryByIdHandler,
    updateSubCategoryHandler,
    deleteSubCategoryHandler
} = require('../handlers/SubCategory/subCategoryHandlers');

const subCategoryRouter = Router();

// Crear un nuevo SubCategory
subCategoryRouter.post('/', createSubCategoryHandler);

// Obtener todos los SubCategory
subCategoryRouter.get('/', getAllSubCategoryHandler);

// Obtener un SubCategory por ID
subCategoryRouter.get('/:id', getSubCategoryByIdHandler);

// Actualizar un SubCategory por ID
subCategoryRouter.put('/:id', updateSubCategoryHandler);


// Eliminar un SubCategory por ID
subCategoryRouter.delete('/:id', deleteSubCategoryHandler);

module.exports = subCategoryRouter;