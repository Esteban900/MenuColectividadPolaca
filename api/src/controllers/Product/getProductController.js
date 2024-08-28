const { Product, SaleType, Category, SubCategory} = require('../../db');


//All Product
const getAllProducts = async () => {
    try {
        const allProduct = await Product.findAll();
        return allProduct;
    } catch (error) {
        throw error;
    }
}


//Product by ID
const searchProductById = async(id) => {
    try {
        const product = await Product.findByPk(id);
        if( product ) {
            return product;
        } else {
            return `ID de producto no existe, ID=${id}`;
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { searchProductById, getAllProducts};