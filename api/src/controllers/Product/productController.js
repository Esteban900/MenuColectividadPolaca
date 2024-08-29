const { Product, SaleType, Category, SubCategory } = require('../../db');

// Crear un producto
const createProduct = async (name, description, imageUrl, cost, availability, category, subCategory, saleTypeIds) => {
    
    try {
        const newProduct = await Product.create({
            name,
            description,
            imageUrl,
            cost,
            availability,
            category,
            subCategory,
        });

        if (saleTypeIds && saleTypeIds.length > 0) {
            await newProduct.setSaleTypes(saleTypeIds);
        }

        return newProduct;
    } catch (error) {
        throw error;
    }
};

// Obtener todos los productos
const getAllProducts = async () => {
       
    try {
        const allProducts = await Product.findAll({

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
const updateProduct = async (id, updates) => {
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            throw new Error(`ID de producto no existe, ID=${id}`);
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