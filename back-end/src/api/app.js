const express = require('express');
const path = require('path');
const cors = require('cors');
const validateJWT = require('../auth/validateJWT');
const ErrorMiddleware = require('../middlewares/ErrorMiddware');

require('express-async-errors');

const routes = require('./routes');

const dir = path.join(__dirname, '../../public/images');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended: true,
}));
const accessControl = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
app.use(accessControl);    

app.use('/images', express.static(dir));
app.get('/customer/products', routes.getAllProducts);
app.post('/login', routes.login);
app.get('/customer/orders/:userId', routes.sale.getSalesByClientId);
app.post('/user/register', routes.user.register);
app.post('/customer/checkout', routes.sale.createSale);
app.get('/customer/orders/details/:id', routes.sale.getSaleDetails);
app.get('/seller', routes.user.getUsersByRole);
app.get('/seller/orders/:sellerId', routes.sale.getSalesBySellerId);
app.get('/seller/:role', routes.user.getUsersByRole);
app.get('/seller/orders', routes.sale.getSalesBySellerId);
app.put('/seller/orders', routes.sale.updateSale);
app.get('/seller/orders/:id', routes.sale.getSaleById);
app.post('/seller/orders/create', validateJWT, routes.sale.createSale);
app.get('/seller/orders/details/:id', routes.sale.getSaleDetails);

app.use(ErrorMiddleware);

module.exports = app;
