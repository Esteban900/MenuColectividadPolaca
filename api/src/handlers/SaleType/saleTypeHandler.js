const {
    createSaleType,
    getAllSaleTypes,
    searchSaleTypeById,
    updateSaleType,
    deleteSaleType
} = require('../../controllers/SaleType/saleTypeController');

// Crear un SaleType
const createSaleTypeHandler = async (req, res) => {
    const { name_lugar_venta } = req.body;
    try {
        const newSaleType = await createSaleType(name_lugar_venta);
        res.status(201).json(newSaleType);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los SaleTypes
const getAllSaleTypesHandler = async (req, res) => {
    try {
        const saleTypes = await getAllSaleTypes();
        res.status(200).json(saleTypes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener un SaleType por ID
const getSaleTypeByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const saleType = await searchSaleTypeById(id);
        res.status(200).json(saleType);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un SaleType
const updateSaleTypeHandler = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedSaleType = await updateSaleType(id, updates);
        res.status(200).json(updatedSaleType);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un SaleType
const deleteSaleTypeHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedSaleType = await deleteSaleType(id);
        res.status(200).json({ message: "SaleType eliminado con éxito" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createSaleTypeHandler,
    getAllSaleTypesHandler,
    getSaleTypeByIdHandler,
    updateSaleTypeHandler,
    deleteSaleTypeHandler
};