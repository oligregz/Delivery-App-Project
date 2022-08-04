const login = require('../controllers/login');
const user = require('../controllers/user');
const sale = require('../controllers/sale');
const { getAllProducts } = require('../controllers/products');

module.exports = {
    login,
    user,
    sale,
    getAllProducts,
};