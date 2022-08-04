import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
// import Logo from '../img/logo.svg';

function Header() {
  const navigate = useNavigate();

  const navLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <header>
      <div>
        Produtos
      </div>
      <div>
        Meus Pedidos
      </div>
      <div>
        Usuario
      </div>
      <button
        type="button"
        onClick={ navLogout }
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </header>
  );
}

export default Header;
