const { Product } = require('../../db');
const { handleUpload, updateUpload  } = require('../../middleware/cloudinaryService');

// Crear un producto
const createProduct = async (name, description, cost, availability, category, subCategory, salesTypes, files) => {
          
    const salesTypesString = Array.isArray(salesTypes) ? salesTypes.join(',') : salesTypes;
    try {
            const uploadedImage = await handleUpload(files[0].buffer);
            
            await await Product.create({
                name,
                description,
                imageUrl: uploadedImage.url,
                cost,
                availability,
                category,
                subCategory,
                salesTypes:salesTypesString,
            });
          

       // return newProduct;
    } catch (error) {
        throw new Error('Error uploading gallery: ' + error.message);
    }
};

// Obtener todos los productos
const getAllProducts = async () => {
       
    try {
        const allProducts = await Product.findAll({

            through: {
                attributes: [],
              },

        });
        
        return allProducts;
    } catch (error) {
        throw error;
    }
};

// Buscar producto por ID
const searchProductById = async (id) => {
    try {
        const product = await Product.findByPk(id, {
            include: [
                {
                    model:SaleType,
                    attributes: ['id_lugar_venta', 'name_lugar_venta'],
                         through: {
                             attributes: [],
                           },
                },
                
           ]
        });
        if (!product) {
            throw new Error(`ID de producto no existe, ID=${id}`);
        }
        return product;
    } catch (error) {
        throw error;
    }
};

// Actualizar producto
const updateProduct = async (id, updates, files) => {
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            throw new Error(`ID de producto no existe, ID=${id}`);
        }
         // Si hay un archivo (nueva imagen), actualizamos la imagen en Cloudinary
         if (files && files.length > 0) {
            const file = files[0]; // Considerando que sólo se sube un archivo a la vez
            const updatedImage = await updateUpload(file, product.imageUrl); // Actualizar en Cloudinary
            updates.imageUrl = updatedImage.url; // Actualizar la URL en el modelo
        }
        await product.update(updates);
        return product;
    } catch (error) {
        throw error;
    }
};

// Eliminar producto
const deleteProduct = async (id) => {
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            throw new Error(`ID de producto no existe, ID=${id}`);
        }
        await product.destroy();
        return product;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    searchProductById,
    updateProduct,
    deleteProduct
};