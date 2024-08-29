const { SubCategory } = require('../../db');

// Crear un SubCategory
const createSubCategory = async (name_subCategory) => {
    console.log("controler create subcategory");
    
    try {
        const newSubCategory = await SubCategory.create({ name_subCategory });
        return newSubCategory;
    } catch (error) {
        throw error;
    }
};

// Obtener todos los SubCategory
const getAllSubCategory = async () => {
    try {
        const subCategory = await SubCategory.findAll();
        return subCategory;
    } catch (error) {
        throw error;
    }
};

// Buscar SubCategory por ID
const searchSubCategoryById = async (id) => {
    try {
        const subCategory = await SubCategory.findByPk(id);
        if (!subCategory) {
            throw new Error(`ID de SubCategory no existe, ID=${id}`);
        }
        return subCategory;
    } catch (error) {
        throw error;
    }
};

// Actualizar SubCategory
const updateSubCategory = async (id, updates) => {
    try {
        const subCategory = await SubCategory.findByPk(id);
        if (!subCategory) {
            throw new Error(`ID de SubCategory no existe, ID=${id}`);
        }
        await SubCategory.update(updates);
        return subCategory;
    } catch (error) {
        throw error;
    }
};

// Eliminar SubCategory
const deleteSubCategory = async (id) => {
    try {
        const subCategory = await SubCategory.findByPk(id);
        if (!subCategory) {
            throw new Error(`ID de SubCategory no existe, ID=${id}`);
        }
        await subCategory.destroy();
        return subCategory;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createSubCategory,
    getAllSubCategory,
    searchSubCategoryById,
    updateSubCategory,
    deleteSubCategory
};