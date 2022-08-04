const { products } = require('../database/models');

const getAllProducts = async () => {
  const getProducts = await products.findAll();
  return getProducts;
};

module.exports = {
  getAllProducts,
};