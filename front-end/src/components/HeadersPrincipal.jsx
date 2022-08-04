import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const navLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <header className="headerPrincipal">
      <div className="container headerPrincipal_1">
        <div>
          <NavLink to="/customer/products">
            <li
              className="productsOrders"
              data-testid="customer_products__element-navbar-link-products"
            >
              PRODUTOS
            </li>
          </NavLink>
          <NavLink to="/customer/orders">
            <li
              data-testid="customer_products__element-navbar-link-orders"
            >
              MEUS PEDIDOS
            </li>
          </NavLink>
        </div>
        <div>
          <li
            className="nameOrders"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            Cicrano da Silva
          </li>
          <button
            type="button"
            className="exitOrders"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ navLogout }
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
