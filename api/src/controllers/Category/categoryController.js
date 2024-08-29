const {Category } = require('../../db');

// // Crear un category
// const createCategory = async (name_category,saleTypeIds) => {
//     try {
//         const newCategory = await Category.create({name_category} );
//             if (saleTypeIds && saleTypeIds.length > 0) {
//                 await newCategory.setSaleTypes(saleTypeIds);
//             }
//             // await newCategory.addSalesType(id_lugar_venta);
            
//         return newCategory;
//     } catch (error) {
//         throw error;
//     }
// };
// Crear una categoría
const createCategory = async (name_category, saleTypeIds) => {
    try {

        // Crear la nueva categoría usando el campo `name_category`
        const newCategory = await Category.create( name_category );

        // Si hay IDs de SaleTypes asociados
        if (saleTypeIds && saleTypeIds.length > 0) {
            // Asociar la categoría con los SaleTypes
            await newCategory.setSaleTypes(saleTypeIds);
        }

        return newCategory;
    } catch (error) {
        throw error;
    }
};
// Obtener todos los category
const getAllCategory = async () => {
    try {
        const category = await Category.findAll();
        return category;
    } catch (error) {
        throw error;
    }
};

// Buscar category por ID
const searchCategoryById = async (id) => {
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            throw new Error(`ID de Category no existe, ID=${id}`);
        }
        return category;
    } catch (error) {
        throw error;
    }
};

// Actualizar category
const updateCategory = async (id, updates) => {
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            throw new Error(`ID de Category no existe, ID=${id}`);
        }
        await Category.update(updates);
        return category;
    } catch (error) {
        throw error;
    }
};

// Eliminar category
const deleteCategory = async (id) => {
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            throw new Error(`ID de category no existe, ID=${id}`);
        }
        await category.destroy();
        return "Category is deleted";
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createCategory,
    getAllCategory,
    searchCategoryById,
    updateCategory,
    deleteCategory
};