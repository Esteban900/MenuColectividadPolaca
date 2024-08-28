const getSaleTypeController = require('../../controllers/SaleType/getSaleTypeController');


const getSaleTypeHandler = async (req, res) => {
    const { tipo_venta } = req.params;
    try {
        const saleType = await getSaleTypeController(tipo_venta);
        
        res.status(200).json(saleType);
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}

module.exports = getSaleTypeHandler;