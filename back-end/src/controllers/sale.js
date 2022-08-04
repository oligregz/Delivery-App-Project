const saleService = require('../services/sale');

const getSalesBySellerId = async (req, res) => {
  const { sellerId } = req.params;
  const allSales = await saleService.getSalesBySellerId(sellerId);
  return res.status(200).json(allSales);
};

const getSalesByClientId = async (req, res) => {
  const { userId } = req.params;
  const allSales = await saleService.getSalesByClientId(userId);
  return res.status(200).json(allSales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.getSaleById(id);
  return res.status(200).json(sale);
};

const updateSale = async (req, res) => {
  const { id, status } = req.body;
  const updatedSale = await saleService.updateSale(id, status);
  return res.status(200).json(updatedSale);
};

const createSale = async (req, res) => {
  const { sale, products } = req.body;
  const createdSale = await saleService.createSale(sale);

  // Salva produtos em SalesProducts
  await products.forEach((product) =>
    saleService.createSaleProducts({ ...product, saleId: createdSale.id }));

  return res.status(201).json(createdSale);
};

// pega a sale com user, seller e products 
const getSaleDetails = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.getSaleProducts(id);
  return res.status(200).json(sale);
};

module.exports = {
  getSalesBySellerId,
  getSaleById,
  updateSale,
  createSale,
  getSaleDetails,
  getSalesByClientId,
};