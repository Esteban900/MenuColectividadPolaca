const getCategoryController = require('../../controllers/Category/getCategoryController');

const getProductsByCategoryHandler = async (req,res) =>{
    const { tipo_venta, categoria } = req.params;
    
    try {
        const category = await getCategoryController(tipo_venta, categoria);

        res.status(200).json({ category})
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = getProductsByCategoryHandler;