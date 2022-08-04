import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import RedirectLogin from './RedirectLogin';
import OrdersClients from '../pages/OrdersClients';
import OrdersDetails from '../pages/OrdersDetails';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import ProductsDefault from '../pages/productsdefault/ProductsDefault';
import OrderSellers from '../pages/OrderSellers';
import OrderSellerDetails from '../pages/OrderSellerDetails';
import Checkout from '../pages/Checkout';

export default function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={ <RedirectLogin /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <ProductsDefault /> } />
      <Route exact path="/customer/orders" element={ <OrdersClients /> } />
      <Route exact path="/customer/orders/:id" element={ <OrdersDetails /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/seller/orders" element={ <OrderSellers /> } />
      <Route exact path="/seller/orders/:id" element={ <OrderSellerDetails /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}
