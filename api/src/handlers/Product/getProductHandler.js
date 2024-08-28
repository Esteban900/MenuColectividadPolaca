const { searchProductById, getAllProducts } = require('../../controllers/Product/getProductController');



//SEARCH BY NAME AND ALL PRODUCT

const getProductsHandler = async (req, res) => {
    const { name } = req.query;

    try {
        const resultProduct = (name) ? await searchProductByName(name) : await getAllProducts();
        res.status(200).json(resultProduct);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};

const getIdProductHandler = async(req,res) => {
    const { id } = req.params;

    try {
        const productById = await searchProductById(id);
        res.status(200).json(productById);
    } catch (error) {
        res.status(400).json( { error: error.message});
    }
};

module.exports = { getProductsHandler, getIdProductHandler};