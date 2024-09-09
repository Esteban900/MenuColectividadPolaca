const multer = require('multer');
const fs = require('fs-extra');
const storage = multer.memoryStorage();

const {
    createProduct,
    getAllProducts,
    searchProductById,
    updateProduct,
    deleteProduct
} = require('../../controllers/Product/productController');

const fileFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Solo se permiten archivos JPG, JPEG y PNG'));
    }
    cb(null, true);
  };
  
//   const upload = multer({ storage: storage, fileFilter: fileFilter }).single('files');
const upload = multer({ storage: storage, fileFilter: fileFilter }).array('files');
  

// Crear un producto

const createProductHandler = async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      try {
        const files = req.files;  
               
        if (!files || files.length === 0) {
          return res.status(400).json({ error: 'No files uploaded' });
        }
        const { name, description, cost, availability, category, subCategory, salesTypes } = req.body;  
               
        await createProduct(name, description, cost, availability, category, subCategory, salesTypes, files);
        res.status(200).json({ message: 'Gallery uploaded successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
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
    try {
        const { id } = req.params;
        const updates = req.body;
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