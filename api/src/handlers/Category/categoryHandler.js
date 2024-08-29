const {
    createCategory,
    getAllCategory,
    searchCategoryById,
    updateCategory,
    deleteCategory
} = require('../../controllers/Category/categoryController');

// Crear un category
const createCategoryHandler = async (req, res) => {
    const { name_category, saleTypeIds } = req.body;
    try {
        const newcategory = await createCategory({name_category,saleTypeIds});
        res.status(201).json(newcategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los category
const getAllCategoryHandler = async (req, res) => {
    try {
        const category = await getAllCategory();
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener un category por ID
const getCategoryByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await searchCategoryById(id);
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un category
const updateCategoryHandler = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedcategory = await updateCategory(id, updates);
        res.status(200).json(updatedcategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un category
const deleteCategoryHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedcategory = await deleteCategory(id);
        res.status(200).json({ message: "category eliminado con éxito" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createCategoryHandler,
    getAllCategoryHandler,
    getCategoryByIdHandler,
    updateCategoryHandler,
    deleteCategoryHandler
};