import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function NavBarProducts() {
  function getName() {
    const userName = localStorage.getItem('user');
    const localName = JSON.parse(userName);
    console.log(localName);
    return localName.name;
  }

  function clearLocalStorage() {
    localStorage.clear();
  }

  return (
    <div className="root">
      <div
        data-testid="customer_products__element-navbar-link-products"
      >
        <Link
          to="/customer/products"
        >
          <li className="products">PRODUTOS</li>
        </Link>
      </div>

      <div
        data-testid="customer_products__element-navbar-link-orders"
      >
        <Link
          to="/customer/orders"
        >
          <li className="pedidos">MEUS PEDIDOS</li>
        </Link>
      </div>

      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        <Link
          to="/usuario"
        >
          <li className="name">{ getName() }</li>
        </Link>
      </div>

      <div
        data-testid="customer_products__element-navbar-link-logout"
      >
        <Link
          to="/login"
        >
          <button
            type="button"
            className="exit"
            onClick={ clearLocalStorage }
          >
            Sair
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBarProducts;
