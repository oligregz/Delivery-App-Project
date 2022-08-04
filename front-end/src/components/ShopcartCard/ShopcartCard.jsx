import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductsContext from '../../context/ProductsContext';
import './style.css';

function ShopcartCard() {
  const { totalPriceState, setTotalPrice } = useContext(ProductsContext);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const shopCart = JSON.parse(localStorage.getItem('shopcart'));
    if (shopCart && shopCart.length > 0) {
      const arrayOfPrices = shopCart.map((product) => product.price);
      const totalPrice = arrayOfPrices.reduce((acc, curr) => (
        ((Number(acc) * 100) + Number(curr) * 100) / 100
      ));
      setTotalPrice(totalPrice);
    } else {
      setTotalPrice(0);
    }
  });

  useEffect(() => {
    const shopCart = JSON.parse(localStorage.getItem('shopcart'));
    if (shopCart && shopCart.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [totalPriceState]);

  return (
    <div>
      <button
        type="button"
        disabled={ disable }
        className="cart-button"
        onClick={ () => navigate('/customer/checkout') }
        data-testid="customer_products__button-cart"
      >
        <span>Ver carrinho R$:</span>
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {
            (`${String(Number(totalPriceState).toFixed(2))}`).replace('.', ',')
          }
        </span>
      </button>
    </div>
  );
}

export default ShopcartCard;
