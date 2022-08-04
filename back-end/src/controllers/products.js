const productsService = require('../services/products');

const getAllProducts = async (_req, res) => {
  try {
    const allProducts = await productsService.getAllProducts();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(400).json({ message: error.message });    
  }
};

module.exports = {
  getAllProducts,
};