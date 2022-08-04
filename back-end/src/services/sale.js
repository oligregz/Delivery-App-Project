const { sales, users, products, salesProducts } = require('../database/models');

const getSalesBySellerId = async (sellerId) => sales.findAll({ where: { sellerId } });

const getSalesByClientId = async (userId) => sales.findAll({ where: { userId } });

const getSaleById = async (id) => sales.findOne({ where: { id } });

const updateSale = async (id, status) => sales.update({ where: { id } }, { status });

const createSale = async (sale) => sales.create(sale);

const createSaleProducts = async (saleProduct) => salesProducts.create(saleProduct);

const getSaleProducts = async (saleId) => sales.findOne({ where: { id: saleId },
  include: [
    { model: users, as: 'user', attributes: { exclude: ['password'] } },
    { model: users, as: 'seller', attributes: { exclude: ['password'] } },
    { model: products, as: 'products', through: { attributes: ['quantity'] } },
  ],
});

module.exports = {
  getSalesBySellerId,
  updateSale,
  getSaleById,
  createSale,
  createSaleProducts,
  getSaleProducts,
  getSalesByClientId,
};