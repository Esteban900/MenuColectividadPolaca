const {
    createSubCategory,
    getAllSubCategory,
    searchSubCategoryById,
    updateSubCategory,
    deleteSubCategory
} = require('../../controllers/SubCategory/subCategoryController');

// Crear un SubCategory
const createSubCategoryHandler = async (req, res) => {
    
    
    const { name_subCategory } = req.body;
    try {
        const newSubCategory = await createSubCategory(name_subCategory);
        res.status(201).json(newSubCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los SubCategory
const getAllSubCategoryHandler = async (req, res) => {
    try {
        const subCategory = await getAllSubCategory();
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener un SubCategory por ID
const getSubCategoryByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const subCategory = await searchSubCategoryById(id);
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un SubCategory
const updateSubCategoryHandler = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedSubCategory = await updateSubCategory(id, updates);
        res.status(200).json(updatedSubCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un SubCategory
const deleteSubCategoryHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedSubCategory = await deleteSubCategory(id);
        res.status(200).json({ message: "SubCategory eliminado con éxito" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createSubCategoryHandler,
    getAllSubCategoryHandler,
    getSubCategoryByIdHandler,
    updateSubCategoryHandler,
    deleteSubCategoryHandler
};