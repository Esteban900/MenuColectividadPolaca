const getSubCategoryController = require('../../controllers/SubCategory/getSubCategory');

const getSubCategoryHandler = async (req, res) => {
    const { tipo_venta, categoria, subcategoria } = req.params;
    try {
        const subCategory = await getSubCategoryController(tipo_venta, categoria, subcategoria); 
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getSubCategoryHandler;