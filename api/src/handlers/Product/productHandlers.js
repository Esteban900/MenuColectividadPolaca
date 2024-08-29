const {
    createProduct,
    getAllProducts,
    searchProductById,
    updateProduct,
    deleteProduct
} = require('../../controllers/Product/productController');

// Crear un producto
const createProductHandler = async (req, res) => {
    const { name, description, imageUrl, cost, availability, category, subCategory, saleTypeIds } = req.body;
    try {
        const newProduct = await createProduct(name, description, imageUrl, cost, availability, category, subCategory, saleTypeIds);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los productos
const getProductsHandler = async (req, res) => {
     
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener un producto por ID
const getIdProductHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await searchProductById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un producto
const updateProductHandler = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedProduct = await updateProduct(id, updates);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un producto
const deleteProductHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await deleteProduct(id);
        res.status(200).json({ message: "Producto eliminado con éxito" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createProductHandler,
    getProductsHandler,
    getIdProductHandler,
    updateProductHandler,
    deleteProductHandler
};